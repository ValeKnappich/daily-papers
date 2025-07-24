import { getArchiveContent, getArchiveDates } from '@/app/archiveUtils';
// Required for static export: generate all possible date params
export async function generateStaticParams() {
  const dates = getArchiveDates();
  return dates.map((date) => ({ date }));
}

import React from 'react';
import ArchivePageContent from '../ArchivePageContent';


export default async function ArchivePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const archiveData = getArchiveContent(date);
  return <ArchivePageContent date={date} archiveData={archiveData} />;
}
