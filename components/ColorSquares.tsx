"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ColorSquares = () => {
  const [mounted, setMounted] = useState(false);

  const colors = ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Static opacity for light mode
  const opacity = "opacity-40";
  const movingOpacity = "opacity-20";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-300">
      {/* Moving Squares - Increased to 60 */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={`moving-${i}`}
          className={`absolute w-32 h-32 ${colors[i % colors.length]} ${movingOpacity} rounded-lg`}
          initial={false}
          animate={{
            x: [Math.random() * 1000, Math.random() * 1000],
            y: [Math.random() * 1000, Math.random() * 1000],
            rotate: 360,
          }}
          transition={{
            duration: 25 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
      {/* Solid Still Patches - Increased to 10 */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`still-${i}`}
          className={`absolute w-64 h-64 ${colors[i % colors.length]} ${opacity} rounded-lg`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
