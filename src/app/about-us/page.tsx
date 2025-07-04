"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section with Image */}
      <section className="relative h-[100vh] w-full flex justify-center items-center overflow-hidden">
        <div className="w-[90%] h-full relative rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/se18.jpeg" // Replace with your actual image path
            alt="Our dedicated care team"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Team & Mission Text */}
      <section className="py-20 px-6 md:px-10 lg:px-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
          Who We Are
        </h1>

        <p className="text-lg md:text-xl text-muted mb-6">
          At <span className="text-primary font-semibold">Care Crest</span>, we believe that every individual
          deserves personalized, respectful, and compassionate care &mdash; right in the comfort of their home.
        </p>

        <p className="text-md md:text-lg text-gray-600 mb-6">
          Our dedicated team of trained caregivers, nurses, and support staff work tirelessly
          to deliver professional health support, daily living assistance, and emotional care to those in need.
          Whether it&apos;s elderly assistance, disability support, or recovery help &mdash; we&apos;re here for your family.
        </p>

        <p className="text-md md:text-lg text-gray-600">
          We&apos;re not just caregivers &mdash; we&apos;re trusted companions, reliable health partners,
          and members of your extended family.
        </p>
      </section>

      {/* Motto / Quote Block */}
      <section className="bg-lightBlue py-12 px-6 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="italic text-xl text-primary font-semibold">
            &ldquo;Care with dignity, comfort at home.&rdquo;
          </p>
          <p className="text-sm text-muted mt-2">
            &mdash; Our Motto at Care Crest
          </p>
        </div>
      </section>
    </div>
  );
}
