"use client";
import { useState, useEffect } from "react";
import { imgPath } from "@/lib/imgPath";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-800 shadow-xl"
          : "bg-green-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-green-300 shadow-md flex-shrink-0">
              <img
                src={imgPath("/images/ngo_logo.png")}
                alt="Omkar Foundation Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-white text-sm group-hover:text-green-200 transition-colors">
                Omkar Health & Education
              </p>
              <p className="text-green-300 text-xs">Foundation</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-green-100 hover:text-white hover:bg-green-600 px-3 py-2 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 bg-white text-green-700 text-sm font-bold px-4 py-2 rounded-full hover:bg-green-50 transition-colors shadow"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white rounded-lg hover:bg-green-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-green-600 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-green-100 hover:text-white hover:bg-green-600 px-3 py-2 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-white text-green-700 text-sm font-bold px-4 py-2 rounded-full text-center hover:bg-green-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Involved
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
