import Link from "next/link";
import { Globe, Facebook, Instagram } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-primary text-white px-4 py-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Care Crest</h2>
          <p className="text-sm text-white/80">
            Compassionate in-home care for every stage of life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-white/80 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/booking">Book Care</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Email: <a href="mailto:info@carecrest.co.ke" className="underline">info@carecrest.co.ke</a><br />
            Phone: <a href="tel:+254712345678" className="underline">+254 712 345 678</a><br />
            Nairobi, Kenya
          </p>
        </div>

        {/* Social Media */}
     {/* Social Media */}
<div>
  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
  <div className="flex gap-4 mt-2 text-xl">
    <Link href="https://carecrest.co.ke" target="_blank" aria-label="Website">
      <Globe className="w-5 h-5 hover:text-primary transition-colors" />
    </Link>
    <Link href="https://facebook.com/carecrest" target="_blank" aria-label="Facebook">
      <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
    </Link>
    <Link href="https://instagram.com/carecrest" target="_blank" aria-label="Instagram">
      <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
    </Link>
  </div>
</div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Care Crest. All rights reserved.
      </div>
    </footer>
  );
}
