



import Link from 'next/link';
import { getArchiveDates, getArchiveContent } from '@/app/archiveUtils';

type Paper = {
  title: string;
  authors?: string[];
  published?: string;
  link?: string;
  summary?: string;
};

type ArchiveContent = {
  papers?: Paper[];
};

export default async function Home() {
  const dates: string[] = getArchiveDates();

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-extrabold mb-8 tracking-tight text-center">All Days' Papers</h1>
      {dates.length === 0 && (
        <p className="text-gray-500">No papers found.</p>
      )}
      {dates.map((date) => {
        const archiveData: ArchiveContent | null = getArchiveContent(date) as ArchiveContent;
        return (
          <section key={date} className="mb-12">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/archive/${date}`} className="text-blue-600 hover:underline">{date}</Link>
            </h2>
            {archiveData && archiveData.papers && archiveData.papers.length > 0 ? (
              <div className="prose dark:prose-invert border rounded p-4 bg-white dark:bg-zinc-900">
                {archiveData.papers.map((paper, i) => (
                  <div key={i} className="mb-8">
                    <h3 className="text-lg font-semibold mb-1">{i + 1}. {paper.title}</h3>
                    <div className="text-sm text-gray-600 mb-1"><b>Authors:</b> {paper.authors && paper.authors.join(', ')}</div>
                    <div className="text-sm text-gray-600 mb-1"><b>Published:</b> {paper.published}</div>
                    <div className="text-sm text-gray-600 mb-2"><b>Link:</b> <a href={paper.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{paper.link}</a></div>
                    <div className="whitespace-pre-line">{paper.summary}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No papers found for this day.</p>
            )}
          </section>
        );
      })}
    </main>
  );
}