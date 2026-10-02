"use client";

import { motion } from "framer-motion";

export default function VideographySubPage({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12"
    >
      <h1 className="text-5xl font-light tracking-tighter mb-12">{title}</h1>
      {children ? (
        children
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-video bg-zinc-900 animate-pulse rounded"
            ></div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
