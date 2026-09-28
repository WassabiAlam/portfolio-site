"use client";

import { motion } from "framer-motion";

export default function PhotographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12"
    >
      {children}
    </motion.div>
  );
}
