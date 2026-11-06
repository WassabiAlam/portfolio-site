"use client";

import { motion } from "framer-motion";
import PhotoGallery from "../components/PhotoGallery";

const firstClassFestPhotos = [
  { src: "/assets/photography/events/JEF06265_graded.jpg", alt: "FirstClassFest Merch Pop-Up photo 1" },
  { src: "/assets/photography/events/JEF06296_graded.jpg", alt: "FirstClassFest Merch Pop-Up photo 2" },
  { src: "/assets/photography/events/JEF06308_graded.jpg", alt: "FirstClassFest Merch Pop-Up photo 3" },
  { src: "/assets/photography/events/JEF06314_graded.JPG", alt: "FirstClassFest Merch Pop-Up photo 4" },
];

const vaxPhotos = [
  { src: "/assets/photography/events/VAX_1.jpg", alt: "VAX Concert photo 1" },
  { src: "/assets/photography/events/VAX_2.jpg", alt: "VAX Concert photo 2" },
  { src: "/assets/photography/events/VAX_3.jpg", alt: "VAX Concert photo 3" },
  { src: "/assets/photography/events/VAX_4.jpg", alt: "VAX Concert photo 4" },
  { src: "/assets/photography/events/VAX_5.jpg", alt: "VAX Concert photo 5" },
  { src: "/assets/photography/events/VAX_6.jpg", alt: "VAX Concert photo 6" },
  { src: "/assets/photography/events/VAX_7.jpg", alt: "VAX Concert photo 7" },
  { src: "/assets/photography/events/VAX_8.jpg", alt: "VAX Concert photo 8" },
  { src: "/assets/photography/events/VAX_9.jpg", alt: "VAX Concert photo 9" },
  { src: "/assets/photography/events/VAX_10.jpg", alt: "VAX Concert photo 10" },
  { src: "/assets/photography/events/VAX_11.jpg", alt: "VAX Concert photo 11" },
  { src: "/assets/photography/events/VAX_12.jpg", alt: "VAX Concert photo 12" },
  { src: "/assets/photography/events/VAX_13.jpg", alt: "VAX Concert photo 13" },
  { src: "/assets/photography/events/VAX_14.jpg", alt: "VAX Concert photo 14" },
  { src: "/assets/photography/events/VAX_15.jpg", alt: "VAX Concert photo 15" },
  { src: "/assets/photography/events/VAX_16.jpg", alt: "VAX Concert photo 16" },
  { src: "/assets/photography/events/VAX_17.jpg", alt: "VAX Concert photo 17" },
  { src: "/assets/photography/events/VAX_18.jpg", alt: "VAX Concert photo 18" },
  { src: "/assets/photography/events/VAX_19.jpg", alt: "VAX Concert photo 19" },
  { src: "/assets/photography/events/VAX_20.jpg", alt: "VAX Concert photo 20" },
];

const dstrbnzPhotos = [
  { src: "/assets/photography/events/DSTRBNZ_1.jpg", alt: "DSTRBNZ Concert photo 1" },
  { src: "/assets/photography/events/DSTRBNZ_2.jpg", alt: "DSTRBNZ Concert photo 2" },
  { src: "/assets/photography/events/DSTRBNZ_3.jpg", alt: "DSTRBNZ Concert photo 3" },
  { src: "/assets/photography/events/DSTRBNZ_4.jpg", alt: "DSTRBNZ Concert photo 4" },
  { src: "/assets/photography/events/DSTRBNZ_5.jpg", alt: "DSTRBNZ Concert photo 5" },
  { src: "/assets/photography/events/DSTRBNZ_6.jpg", alt: "DSTRBNZ Concert photo 6" },
  { src: "/assets/photography/events/DSTRBNZ_7.jpg", alt: "DSTRBNZ Concert photo 7" },
  { src: "/assets/photography/events/DSTRBNZ_8.jpg", alt: "DSTRBNZ Concert photo 8" },
];

export default function EventPhotography() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-light mb-12">Event Photography</h1>

      <div className="mb-16">
        <h2 className="text-2xl font-light mb-6 text-zinc-200">FirstClassFest Merch Pop-Up (08/23)</h2>
        <PhotoGallery photos={firstClassFestPhotos} />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-light mb-6 text-zinc-200">VAX Concert (10/24)</h2>
        <PhotoGallery photos={vaxPhotos} />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-light mb-6 text-zinc-200">DSTRBNZ Concert (09/26)</h2>
        <PhotoGallery photos={dstrbnzPhotos} />
      </div>
    </motion.div>
  );
}
