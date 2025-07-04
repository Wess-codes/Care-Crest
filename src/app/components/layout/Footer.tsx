"use client";

import Link from "next/link";
import { Globe, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-6 md:px-10 lg:px-20 py-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Care Crest</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Compassionate in-home care for every stage of life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-1 text-white/80 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/booking" className="hover:underline">Book Care</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-white/80 leading-relaxed space-y-1">
            <li>
              Email:{" "}
              <a href="mailto:info@carecrest.co.ke" className="underline hover:text-white">
                info@carecrest.co.ke
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+254712345678" className="underline hover:text-white">
                +254 712 345 678
              </a>
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-white/90 mt-2">
            <Link href="https://carecrest.co.ke" target="_blank" aria-label="Website">
              <Globe className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href="https://facebook.com/carecrest" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com/carecrest" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Care Crest. All rights reserved.
      </div>
    </footer>
  );
}
