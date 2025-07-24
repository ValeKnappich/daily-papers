# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "feedparser",
#     "requests",
#     "pyyaml",
# ]
# ///
import feedparser
import os
import requests
import yaml

from datetime import datetime, timedelta

CONFIG_PATH = "config.yaml"
ARCHIVE_DIR = "archive"

ARXIV_API_URL = "http://export.arxiv.org/api/query"


def load_config(path: str = CONFIG_PATH) -> dict:
    """
    Load the YAML configuration file from the specified path.

    Parameters:
        path (str): Path to the YAML configuration file. Defaults to CONFIG_PATH.

    Returns:
        dict: Parsed configuration as a dictionary.
    """
    with open(path, "r") as f:
        return yaml.safe_load(f)


def fetch_arxiv_papers(
    query: str, max_results: int, now: datetime, interval_days: int | None = None
) -> list[dict]:
    """
    Fetch papers from the arXiv API based on a search query and optional date interval.

    Parameters:
        query (str): The arXiv search query string.
        max_results (int): Maximum number of results to fetch. If <= 0, fetches all available.
        interval_days (int | None): If provided, restricts results to papers updated within the last N days.

    Returns:
        list[dict]: List of dictionaries, each representing a paper with title, authors, summary, link, and published date.
    """
    params = {
        "search_query": query,
        "start": 0,
        "sortBy": "lastUpdatedDate",
        "sortOrder": "descending",
    }
    if max_results > 0:
        params["max_results"] = max_results

    if interval_days:
        start_date = (now - timedelta(days=interval_days)).strftime(
            "%Y%m%d%H%M"
        )
        end_time = now.strftime("%Y%m%d%H%M")
        date_filter = f"lastUpdatedDate:[{start_date} TO {end_time}]"
        full_query = f"({query}) AND {date_filter}"
        params["search_query"] = full_query

    print(ARXIV_API_URL, params)
    response = requests.get(ARXIV_API_URL, params=params)
    response.raise_for_status()
    feed = feedparser.parse(response.text)
    papers: list[dict] = []
    for entry in feed.entries:
        papers.append(
            {
                "title": entry.title,
                "authors": [author.name for author in entry.authors],
                "summary": entry.summary.replace("\n", " "),  # type: ignore
                "link": entry.link,
                "published": entry.published,
            }
        )
    return papers


def write_to_archive(papers: list[dict], date_str: str) -> None:
    """
    Write the list of papers to a markdown file in the archive directory, formatted for daily review.

    Parameters:
        papers (list[dict]): List of paper dictionaries to write.
        date_str (str): Date string (YYYY-MM-DD) for the archive filename.
    """
    os.makedirs(ARCHIVE_DIR, exist_ok=True)
    filename = os.path.join(ARCHIVE_DIR, f"{date_str}.yaml")
    with open(filename, "w") as f:
        yaml.dump(
            {"date": date_str, "papers": papers}, f, allow_unicode=True, sort_keys=False
        )
    print(f"Wrote {len(papers)} papers to {filename}")


def main(now: datetime | None = None) -> None:
    """
    Main entry point for the script.

    Loads configuration, fetches papers from arXiv if enabled, and writes the results to the archive.
    """
    now = now or datetime.now()
    config = load_config()
    if config["arxiv"]["enabled"]:
        query = config["arxiv"]["query"]
        max_results = config["arxiv"]["max_results"]
        interval_days = config["arxiv"]["interval_days"]
        papers = fetch_arxiv_papers(query, max_results, now, interval_days)
        date_str = now.strftime("%Y-%m-%d")
        write_to_archive(papers, date_str)
    else:
        print("arXiv fetching is disabled in config.")


if __name__ == "__main__":
    main()
