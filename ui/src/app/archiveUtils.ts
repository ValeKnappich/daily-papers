import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const ARCHIVE_DIR = path.join(process.cwd(), '..', 'archive');

export function getArchiveDates() {
  return fs.readdirSync(ARCHIVE_DIR)
    .filter((file) => file.endsWith('.yaml'))
    .map((file) => file.replace('.yaml', ''))
    .sort((a, b) => b.localeCompare(a)); // newest first
}

import type { ArchiveContent } from './archive/ArchivePageContent';

export function getArchiveContent(date: string): ArchiveContent | null {
  const filePath = path.join(ARCHIVE_DIR, `${date}.yaml`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  try {
    return yaml.load(fileContent) as ArchiveContent;
  } catch (e) {
    console.error('Failed to parse YAML:', e);
    return null;
  }
}
