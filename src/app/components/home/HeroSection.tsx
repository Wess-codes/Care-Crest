// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-0 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10 lg:px-20">

        {/* Image */}
        <div className="relative flex-shrink-0 w-full md:w-3/5 h-[600px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hero.jpeg"
            alt="Caring nurse helping elderly woman"
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl py-12 md:py-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Personalized Home Care That Puts You First
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-muted mb-8">
            At Care Crest, we bring warmth, safety, and professional care <br className="hidden md:block" />
            right to your doorstep
          </p>
          <Link
            href="/services"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
