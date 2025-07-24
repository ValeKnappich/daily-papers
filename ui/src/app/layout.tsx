
import type { Metadata } from "next";

import "./globals.css";
import ArchiveDropdown from "./ArchiveDropdown";



export const metadata: Metadata = {
  title: "Daily Papers",
  description: "Stay updated with the latest research papers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">
        <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-800 mb-8">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/favicon.ico" alt="favicon" width={28} height={28} className="rounded" />
              <span className="font-bold text-lg tracking-tight">Daily Papers</span>
            </a>
            <div className="flex items-center gap-4">
              <ArchiveDropdown />
              <a href="https://github.com/kvn2fe/daily-papers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">GitHub</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="w-full py-6 border-t border-zinc-200 dark:border-zinc-800 mt-12 text-center text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Daily Papers. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
