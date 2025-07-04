"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-12 text-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-10 lg:px-20">

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Personalized Home Care<br className="hidden md:block" /> That Puts You First
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8">
            At Care Crest, we bring warmth, safety, and professional care<br className="hidden md:block" />
            right to your doorstep.
          </p>
          <Link
            href="/services"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-3/5 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hero.jpg"
            alt="Caring nurse helping elderly woman"
            className="object-cover"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
