"use client";

import { motion } from "framer-motion";

export default function DesignGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12"
    >
      <h1 className="text-5xl font-light tracking-tighter mb-12">Graphic Design</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Placeholder for designs */}
        <div className="aspect-video bg-zinc-900 animate-pulse"></div>
        <div className="aspect-video bg-zinc-900 animate-pulse"></div>
        <div className="aspect-video bg-zinc-900 animate-pulse"></div>
        <div className="aspect-video bg-zinc-900 animate-pulse"></div>
      </div>
    </motion.div>
  );
}
