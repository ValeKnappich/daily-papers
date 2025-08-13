# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "feedparser",
#     "requests",
#     "pyyaml",
# ]
# ///
from datetime import datetime, timedelta
from get_daily_papers import main as get_daily_papers_main, load_config

DAYS = 100
config = load_config()
now = datetime.now()
interval_days = config["arxiv"]["interval_days"]

for days_ago in range(interval_days, DAYS + 1, interval_days):
    date = now - timedelta(days=days_ago)
    print(f"\nFetching papers for {date.strftime('%Y-%m-%d')}")
    get_daily_papers_main(now=date)