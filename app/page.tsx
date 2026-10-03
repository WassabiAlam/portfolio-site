"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[calc(100vh-160px)] flex flex-col justify-center items-center"
    >
      {/* Background Image (Home page specific) */}
      <div className="fixed inset-0 -z-50">
        <Image
          src="/assets/home-bg.jpg"
          alt="Home Background"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-7xl md:text-9xl font-light tracking-tighter text-white !text-white"
      >
        WASI ALAM
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-2xl md:text-3xl font-light max-w-2xl text-white text-center !text-white"
      >
        Creative developer • Photographer • Videographer.
        <br />
        Focusing on cinematic experiences and visual narratives.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12"
      >
        <Link
          href="/photography/general"
          className="text-sm uppercase tracking-widest border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition-colors !text-white"
        >
          View Work
        </Link>
      </motion.div>
    </motion.div>
  );
}
