"use client";
import React from "react";
import Link from "next/link";

const ArchiveDropdown: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [dates, setDates] = React.useState<string[]>([]);
  React.useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/daily-papers";
    const url = `${basePath}/api/archive-dates`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDates(data.dates || []));
  }, []);
  // Get current date from URL if on archive page (for highlighting, but not for button text)
  let currentDate = undefined;
  if (typeof window !== "undefined") {
    const match = window.location.pathname.match(/archive\/(\d{4}-\d{2}-\d{2})/);
    if (match) currentDate = match[1];
  }
  return (
    <div className="relative">
      <button
        className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        Past Days
        <span className="ml-2">▼</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded shadow-lg z-50 max-h-60 overflow-auto" role="listbox">
          {dates.map((date) => (
            <li key={date}>
              <Link
                href={`/archive/${date}`}
                className={`block px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${date === currentDate ? "font-bold text-blue-600" : "text-zinc-900 dark:text-zinc-100"}`}
                onClick={() => setOpen(false)}
                role="option"
                aria-selected={date === currentDate}
              >
                {date}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArchiveDropdown;
