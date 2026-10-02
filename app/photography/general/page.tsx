"use client";

import { motion } from "framer-motion";
import PhotoGallery from "../components/PhotoGallery";

const generalPhotos = [
  { src: "/assets/photography/general/general_1.JPG", alt: "General photo 1" },
  { src: "/assets/photography/general/general_2.JPG", alt: "General photo 2" },
  { src: "/assets/photography/general/general_3.JPG", alt: "General photo 3" },
  { src: "/assets/photography/general/general_4.JPG", alt: "General photo 4" },
  { src: "/assets/photography/general/general_5.JPG", alt: "General photo 5" },
  { src: "/assets/photography/general/general_6.JPG", alt: "General photo 6" },
  { src: "/assets/photography/general/general_7.JPG", alt: "General photo 7" },
  { src: "/assets/photography/general/general-8.jpg", alt: "General photo 8" },
];

export default function GeneralPhotography() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-light mb-8">General Photography</h1>
      {generalPhotos.length > 0 ? (
        <PhotoGallery photos={generalPhotos} />
      ) : (
        <p className="text-zinc-400">No photos added to general gallery yet.</p>
      )}
    </motion.div>
  );
}
