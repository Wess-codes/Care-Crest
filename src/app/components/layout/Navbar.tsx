"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          Care Crest
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-foreground font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/services" className="hover:text-primary transition">Services</Link>
          <Link href="/about-us" className="hover:text-primary transition">About Us</Link>
          <Link href="/blog" className="hover:text-primary transition">Blog</Link>
        </nav>

        {/* CTA Buttons (Desktop) */}
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
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-3 text-foreground font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="block">About Us</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block">Blog</Link>
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
