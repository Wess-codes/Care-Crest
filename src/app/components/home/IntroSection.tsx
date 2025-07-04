"use client";

import { HeartHandshake, UserCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Compassion First",
    description: "We treat every client with respect, love, and dignity.",
    image: "/image1.jpeg",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Skilled Professionals",
    description: "Certified caregivers trained for elder and specialized care.",
    image: "/image2.jpeg",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Safe & Secure",
    description: "We ensure safety, trust, and accountability in all we do.",
    image: "/image3.jpeg",
  },
];

export default function IntroSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Why Choose Care Crest?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority={idx === 0}
                />
              </div>

              {/* Icon + Text */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
