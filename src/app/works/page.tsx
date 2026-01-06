"use client";

import Link from "next/link";

export default function Works() {
  return (
    <div className="min-h-screen bg-[#0b3200] flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-6xl font-black mb-8">WORKS</h1>
      <Link
        href="/"
        className="text-[#4b7749] hover:text-white transition-colors text-xl font-bold"
      >
        ← BACK TO HOME
      </Link>
    </div>
  );
}
