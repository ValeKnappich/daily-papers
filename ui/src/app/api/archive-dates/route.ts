export const dynamic = "force-static";
import { NextResponse } from 'next/server';
import { getArchiveDates } from '@/app/archiveUtils';

export async function GET() {
  // getArchiveDates is synchronous
  const dates = getArchiveDates();
  return NextResponse.json({ dates });
}
