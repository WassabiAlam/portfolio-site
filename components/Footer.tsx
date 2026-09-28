import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full p-12 mt-auto border-t border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-400 font-light text-sm">
          &copy; {new Date().getFullYear()} Wasi Alam. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white text-zinc-400 transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/wassabi.alam/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white text-zinc-400 transition-colors">Instagram</a>
          <Link href="/contact" className="text-sm hover:text-white text-zinc-400 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
