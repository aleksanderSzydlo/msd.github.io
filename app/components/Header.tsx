"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "../data/content";
import { cn } from "../lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-lg font-bold tracking-widest uppercase transition-colors",
                isScrolled ? "text-neutral-900" : "text-white"
              )}
            >
              MSD
            </span>
            <span
              className={cn(
                "text-xs font-light tracking-[0.3em] uppercase transition-colors",
                isScrolled ? "text-neutral-600" : "text-white/80"
              )}
            >
              Architekci
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteContent.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wider uppercase transition-colors hover:opacity-70",
                  isScrolled ? "text-neutral-700" : "text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-neutral-700" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-white",
          isMenuOpen ? "max-h-96 border-b border-neutral-100" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm tracking-wider uppercase text-neutral-700 hover:text-neutral-900 py-2 border-b border-neutral-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
