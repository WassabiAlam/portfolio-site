"use client";

import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xzezkwwb"); // Form ID updated

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-12"
      >
        <p className="text-2xl font-light">Thanks for reaching out! I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12 max-w-2xl"
    >
      <h1 className="text-5xl font-light tracking-tighter mb-8">Contact</h1>

      {/* Styled container for the form */}
      <form onSubmit={handleSubmit} className="bg-zinc-100 p-8 rounded-2xl space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-light text-zinc-600 mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full bg-white border border-zinc-300 rounded-md py-2 px-3 focus:outline-none focus:border-black transition-colors"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-light text-zinc-600 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-white border border-zinc-300 rounded-md py-2 px-3 focus:outline-none focus:border-black transition-colors"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        {/* Updated Button Styling to match Navbar Contact button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="px-6 py-2 bg-white text-black rounded-full transition-opacity text-sm font-medium border border-black hover:opacity-80 disabled:opacity-50"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-16 space-y-6">
        <p className="text-3xl font-medium text-white">Let's connect.</p>
        <div className="flex gap-4 text-lg">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-black rounded-full transition-opacity text-sm font-medium border border-black hover:opacity-80">LinkedIn</a>
          <a href="https://www.instagram.com/wassabi.alam/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-black rounded-full transition-opacity text-sm font-medium border border-black hover:opacity-80">Instagram</a>
        </div>
      </div>
    </motion.div>
  );
}
