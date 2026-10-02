"use client";

import { motion } from "framer-motion";
import PhotoGallery from "../components/PhotoGallery";

const eventPhotos = [
  { src: "/assets/photography/events/DSTRBNZ_1.jpg", alt: "Event photo 5" },
  { src: "/assets/photography/events/JEF06265_graded.jpg", alt: "Event photo 1" },
  { src: "/assets/photography/events/DSTRBNZ_6.jpg", alt: "Event photo 4" },
  { src: "/assets/photography/events/JEF06296_graded.jpg", alt: "Event photo 2" },
  { src: "/assets/photography/events/DSTRBNZ_2.jpg", alt: "Event photo 6" },
  { src: "/assets/photography/events/JEF06308_graded.jpg", alt: "Event photo 3" },
  { src: "/assets/photography/events/DSTRBNZ_5.jpg", alt: "Event photo 7" },
  { src: "/assets/photography/events/DSTRBNZ_4.jpg", alt: "Event photo 8" },
  { src: "/assets/photography/events/DSTRBNZ_3.jpg", alt: "Event photo 9" },
];

export default function EventPhotography() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-light mb-8">Event Photography</h1>
      <PhotoGallery photos={eventPhotos} />
    </motion.div>
  );
}
