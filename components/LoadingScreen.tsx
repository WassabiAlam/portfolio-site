import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust duration

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="flex-1 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light tracking-widest text-white"
        >
          WASI ALAM
        </motion.h1>
      </div>
      <div className="absolute bottom-6 right-6 text-white font-sans text-5xl font-extrabold tracking-tighter">
        {progress}%
      </div>
    </motion.div>
  );
}
