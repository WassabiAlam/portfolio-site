"use client";

import { motion } from "framer-motion";

export default function VideographyPage() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="p-6 md:p-12"
>
  <h1 className="text-5xl font-light tracking-tighter mb-12">Videography</h1>
  <p className="text-xl text-zinc-400">
    Select a category from the navigation menu above to view my work.
  </p>
</motion.div>
  );
}
