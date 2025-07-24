import React from 'react';
import Link from 'next/link';

export interface ArchiveContent {
  papers: {
    title: string;
    authors: string[];
    published: string;
    link: string;
    summary: string;
  }[];
}

interface ArchivePageContentProps {
  date: string;
  archiveData: ArchiveContent | null;
}

const ArchivePageContent: React.FC<ArchivePageContentProps> = ({ date, archiveData }) => (
  <main className="max-w-6xl mx-auto py-10 px-4">
    <h1 className="text-2xl font-extrabold mb-8 tracking-tight text-center">Papers for {date}</h1>
    {archiveData?.papers?.length ? (
      <div className="prose dark:prose-invert border rounded p-4 bg-white dark:bg-zinc-900 mb-8">
        {archiveData.papers.map((paper, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-semibold mb-1">{i + 1}. {paper.title}</h2>
            <div className="text-sm text-gray-600 mb-1"><b>Authors:</b> {paper.authors && paper.authors.join(', ')}</div>
            <div className="text-sm text-gray-600 mb-1"><b>Published:</b> {paper.published}</div>
            <div className="text-sm text-gray-600 mb-2"><b>Link:</b> <a href={paper.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{paper.link}</a></div>
            <div className="whitespace-pre-line">{paper.summary}</div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 mb-8">No papers found for this day.</p>
    )}
    {/* Dropdown for past days is now in the header */}
    <div className="mt-8">
      <Link href="/" className="text-gray-700 hover:underline">← Back to Today</Link>
    </div>
  </main>
);

export default ArchivePageContent;
