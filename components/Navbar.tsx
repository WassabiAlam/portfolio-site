"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobilePhotoOpen, setIsMobilePhotoOpen] = useState(false);
  const [isMobileVideoOpen, setIsMobileVideoOpen] = useState(false);

  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-background/80 backdrop-blur-sm transition-colors duration-300 text-black">
      <Link href="/" className="text-2xl font-bold">Wasi Alam</Link>
      <div className="hidden md:flex gap-6 items-center">
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

      {/* Hamburger Icon (Mobile) */}
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-black border-b border-zinc-200 p-6 flex flex-col gap-6 items-center shadow-2xl z-50">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:opacity-70">About</Link>

          {/* Photography Mobile Dropdown */}
          <div className="flex flex-col items-center gap-2 w-full">
            <button
              onClick={() => setIsMobilePhotoOpen(!isMobilePhotoOpen)}
              className="flex items-center gap-1 text-lg font-medium hover:opacity-70"
            >
              Photography <ChevronDown size={18} className={`transition-transform ${isMobilePhotoOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobilePhotoOpen && (
              <div className="flex flex-col gap-2 bg-zinc-50 p-3 rounded-lg w-full max-w-xs items-center border border-zinc-200">
                <Link
                  href="/photography/general"
                  onClick={() => { setIsMobileMenuOpen(false); setIsMobilePhotoOpen(false); }}
                  className="py-1.5 px-4 w-full text-center text-sm font-medium rounded hover:bg-zinc-200 text-zinc-800"
                >
                  General
                </Link>
                <Link
                  href="/photography/events"
                  onClick={() => { setIsMobileMenuOpen(false); setIsMobilePhotoOpen(false); }}
                  className="py-1.5 px-4 w-full text-center text-sm font-medium rounded hover:bg-zinc-200 text-zinc-800"
                >
                  Events
                </Link>
              </div>
            )}
          </div>

          {/* Videography Mobile Dropdown */}
          <div className="flex flex-col items-center gap-2 w-full">
            <button
              onClick={() => setIsMobileVideoOpen(!isMobileVideoOpen)}
              className="flex items-center gap-1 text-lg font-medium hover:opacity-70"
            >
              Videography <ChevronDown size={18} className={`transition-transform ${isMobileVideoOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileVideoOpen && (
              <div className="flex flex-col gap-2 bg-zinc-50 p-3 rounded-lg w-full max-w-xs items-center border border-zinc-200">
                <Link
                  href="/videography/concerts"
                  onClick={() => { setIsMobileMenuOpen(false); setIsMobileVideoOpen(false); }}
                  className="py-1.5 px-4 w-full text-center text-sm font-medium rounded hover:bg-zinc-200 text-zinc-800"
                >
                  Concerts
                </Link>
                <Link
                  href="/videography/general"
                  onClick={() => { setIsMobileMenuOpen(false); setIsMobileVideoOpen(false); }}
                  className="py-1.5 px-4 w-full text-center text-sm font-medium rounded hover:bg-zinc-200 text-zinc-800"
                >
                  General
                </Link>
                <Link
                  href="/videography/events"
                  onClick={() => { setIsMobileMenuOpen(false); setIsMobileVideoOpen(false); }}
                  className="py-1.5 px-4 w-full text-center text-sm font-medium rounded hover:bg-zinc-200 text-zinc-800"
                >
                  Events
                </Link>
              </div>
            )}
          </div>

          <Link href="/design" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:opacity-70">Design</Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-black text-white rounded-full transition-opacity text-sm font-medium hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
