// src/components/layout/TopBar.tsx
"use client";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-primary text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <Link
          href="https://www.google.com/maps/place/Nairobi,+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          📍 Nairobi, Kenya
        </Link>
        <span>🕒 Mon - Sat: 8:00am - 6:00pm</span>
        <a href="tel:+254712345678" className="hover:underline">
          📞 +254 712 345 678
        </a>
      </div>
    </div>
  );
}
