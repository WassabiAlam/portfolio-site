"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12 max-w-4xl"
    >
      <h1 className="text-5xl font-light tracking-tighter mb-8 text-black">About</h1>

      {/* Body: Force black */}
      <div className="space-y-6 text-lg text-black font-light leading-relaxed">
        <p>
          My name is Wasi Alam and I’m currently studying Communication, Culture, Information & Technology (CCIT) at the University of Toronto Mississauga.
        </p>
        <p>
          I’m passionate about visual storytelling, cinematic content creation, photography, videography, social media, graphic design, and modern web development.
          I enjoy combining creativity and technical skills to create immersive digital experiences that feel cinematic, polished, modern, and emotionally engaging.
        </p>
        <p>
          Currently, I serve as a <strong>Social Media Executive for UTMHOSA</strong>, where I manage digital presence, create content, and drive engagement.
          This role allows me to blend my technical media skills with strategic communication to build a community around the club.
        </p>
        <p>
          Over the past few years, I’ve worked on photography collections, cinematic videos, portfolio websites, and digital marketing projects.
          Specifically, I have been deeply engaged in concert photography and event videography, where I focus heavily on atmosphere, pacing, and
          capturing the raw energy of live performances. Through these experiences, I have refined my approach to movement, composition,
          colour grading, and emotional immersion, ensuring that every visual piece tells a memorable story.
        </p>

        <p>
          Alongside my creative media work, I design and develop websites using HTML, CSS, and JavaScript, while experimenting with cinematic layouts,
          immersive interfaces, animations, and modern responsive web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="aspect-video bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-500">
          Photo Placeholder 1
        </div>
        <div className="aspect-video bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-500">
          Photo Placeholder 2
        </div>
      </div>
    </motion.div>
  );
}
