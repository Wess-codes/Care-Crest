// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    // You can later integrate real submission logic here
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="w-full px-6 md:px-10 lg:px-20 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Contact Us</h1>
        <p className="text-center text-muted mb-12">
          We'd love to hear from you! Reach us directly or send a quick message below.
        </p>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-4 text-muted text-sm">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:info@carecrest.co.ke" className="underline">
                info@carecrest.co.ke
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+254712345678" className="underline">
                +254 712 345 678
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <a
                href="https://www.google.com/maps/place/Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Nairobi, Kenya
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <Link
                href="https://wa.me/254712345678"
                target="_blank"
                className="underline text-green-600"
              >
                Chat on WhatsApp
              </Link>
            </div>

            {/* Map */}
            <div className="mt-6 w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.088550407437!2d36.8219467!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e8b5ecf2d3%3A0x3ba71a50f6a4ea35!2sNairobi!5e0!3m2!1sen!2ske!4v1688912345678"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition"
            >
              Send Message
            </button>

            {/* Success Message */}
            {sent && (
              <p className="text-sm text-green-600 font-medium">
                ✅ Your message has been sent! We'll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
