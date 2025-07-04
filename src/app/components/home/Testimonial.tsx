// src/components/home/TestimonialOrVisualSection.tsx
"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Care Crest helped my dad recover comfortably at home after surgery. The staff was kind, punctual, and always professional.",
    name: "Grace M.",
    location: "Nairobi",
  },
  {
    quote:
      "The caregivers at Care Crest treated my mum with so much dignity. She always looked forward to their visits.",
    name: "Daniel K.",
    location: "Kiambu",
  },
  {
    quote:
      "They supported my brother after an accident — the best home care service I’ve experienced in Kenya.",
    name: "Linda W.",
    location: "Thika",
  },
];

export default function TestimonialOrVisualSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <Quote className="text-primary mb-4" />
              <blockquote className="italic text-base text-gray-700 mb-4">
                “{item.quote}”
              </blockquote>
              <p className="font-semibold text-sm text-gray-900">
                — {item.name}, {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
