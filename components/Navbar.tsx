"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-background/80 backdrop-blur-sm transition-colors duration-300 text-black">
      <Link href="/" className="text-2xl font-bold">Wasi Alam</Link>
      <div className="flex gap-6 items-center">
        <Link href="/about" className="hover:opacity-70 transition-opacity text-black">About</Link>

        {/* Photography Dropdown */}
        <div className="relative">
          <button
            onClick={() => { setIsPhotoOpen(!isPhotoOpen); setIsVideoOpen(false); }}
            className="flex items-center gap-1 hover:opacity-70 transition-opacity text-black"
          >
            Photography <ChevronDown size={16} />
          </button>
          {isPhotoOpen && (
            <div className="absolute top-10 right-0 bg-white border border-zinc-200 rounded-lg shadow-xl p-2 w-32 z-50 text-black">
              <Link href="/photography/general" onClick={() => setIsPhotoOpen(false)} className="block p-2 hover:bg-zinc-100 rounded text-sm">General</Link>
              <Link href="/photography/events" onClick={() => setIsPhotoOpen(false)} className="block p-2 hover:bg-zinc-100 rounded text-sm">Events</Link>
            </div>
          )}
        </div>

        {/* Videography Dropdown */}
        <div className="relative">
          <button
            onClick={() => { setIsVideoOpen(!isVideoOpen); setIsPhotoOpen(false); }}
            className="flex items-center gap-1 hover:opacity-70 transition-opacity text-black"
          >
            Videography <ChevronDown size={16} />
          </button>
          {isVideoOpen && (
            <div className="absolute top-10 right-0 bg-white border border-zinc-200 rounded-lg shadow-xl p-2 w-32 z-50 text-black">
              <Link href="/videography/concerts" onClick={() => setIsVideoOpen(false)} className="block p-2 hover:bg-zinc-100 rounded text-sm">Concerts</Link>
              <Link href="/videography/general" onClick={() => setIsVideoOpen(false)} className="block p-2 hover:bg-zinc-100 rounded text-sm">General</Link>
              <Link href="/videography/events" onClick={() => setIsVideoOpen(false)} className="block p-2 hover:bg-zinc-100 rounded text-sm">Events</Link>
            </div>
          )}
        </div>

        <Link href="/design" className="hover:opacity-70 transition-opacity text-black">Design</Link>
        {/* Contact button: Always White Background and Black Text */}
        <Link
          href="/contact"
          className="px-4 py-2 bg-white text-black rounded-full transition-opacity text-sm font-medium border border-black hover:opacity-80"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
