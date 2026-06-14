import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Products", "Technology", "Benefits", "FAQ", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors ${
        scrolled
          ? "bg-white border-b border-zinc-200 shadow-sm py-2"
          : "bg-zinc-50 py-4"
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="Freeze Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-zinc-900 font-bold text-xl tracking-tight">
            Freeze Manufacturers
            <span className="font-normal text-zinc-500">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 cursor-pointer"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-zinc-900 text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide hover:bg-zinc-800 cursor-pointer"
          >
            GET A QUOTE
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 flex flex-col shadow-lg mt-2">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-zinc-800 font-medium border-b border-zinc-100 last:border-0 cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
