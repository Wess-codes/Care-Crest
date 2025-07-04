"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
          Care Crest
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-foreground font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/booking"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-foreground font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link
            href="/booking"
            className="block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="block border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
