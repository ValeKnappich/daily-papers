
import type { Metadata } from "next";

import "./globals.css";



import ArchiveDropdown from "./ArchiveDropdown";
import Link from "next/link";
import Image from "next/image";



export const metadata: Metadata = {
  title: "Daily Papers",
  description: "Stay updated with the latest research papers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/daily-papers";
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen">
        <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-800 mb-8">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src={`${basePath}/favicon.png`} alt="favicon" width={28} height={28} className="rounded" />
              <span className="font-bold text-lg tracking-tight">Daily Papers</span>
            </Link>
            <div className="flex items-center gap-4">
              <ArchiveDropdown />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
