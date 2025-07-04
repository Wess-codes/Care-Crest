"use client";

import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-blue-100 text-center py-16 px-6 md:px-10 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">
          Need Trusted Home Care?
        </h2>
        <p className="text-lg text-muted mb-8">
          Let our team support your loved ones with compassion and expertise.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
