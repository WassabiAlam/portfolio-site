"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const designs = [
  { src: "/assets/design/nilcire-poster-01.jpg", alt: "Nilcire Poster" },
  { src: "/assets/design/stand-around-poster-01.jpg", alt: "Stand Around Poster" },
  { src: "/assets/design/vax-concert-poster-01.jpg", alt: "Vax Concert Poster" },
  { src: "/assets/design/Riovaz-Poster.jpg", alt: "Riovaz Poster" },
];

export default function DesignGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12"
    >
      <h1 className="text-5xl font-light tracking-tighter mb-12">Graphic Design</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {designs.map((design, i) => (
          <div
            key={i}
            className="relative border-8 border-black rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={design.src}
              alt={design.alt}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
