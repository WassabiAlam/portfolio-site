"use client";

import { motion } from "framer-motion";

export default function GeneralPhotography() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="aspect-square bg-zinc-900 animate-pulse rounded"></div>
      ))}
    </div>
  );
}
