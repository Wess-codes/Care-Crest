"use client";

import Link from "next/link";
import Image from "next/image";
import {
  UserPlus,
  Brain,
  RefreshCcw,
  Accessibility,
  HeartPulse,
  Baby,
} from "lucide-react";

const services = [
  {
    slug: "elder-care",
    title: "Elder Care",
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    image: "/se3.jpeg",
    description:
      "Compassionate daily support for seniors to live with dignity and independence.",
  },
  {
    slug: "dementia-care",
    title: "Dementia Care",
    icon: <Brain className="h-8 w-8 text-primary" />,
    image: "/se4.jpeg",
    description:
      "Specialized memory care that prioritizes safety, patience, and routine.",
  },
  {
    slug: "post-op-recovery",
    title: "Post-Op Recovery",
    icon: <RefreshCcw className="h-8 w-8 text-primary" />,
    image: "/se1.jpeg",
    description:
      "Comfortable healing at home with help in medication, hygiene, and mobility.",
  },
  {
    slug: "disability-support",
    title: "Disability Support",
    icon: <Accessibility className="h-8 w-8 text-primary" />,
    image: "/image4.jpeg",
    description:
      "Assistance for individuals with disabilities to thrive and maintain routine.",
  },
  {
    slug: "palliative-care",
    title: "Palliative Care",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    image: "/se17.jpeg",
    description:
      "Supportive end-of-life care focused on comfort, dignity, and quality time.",
  },
  {
    slug: "childcare",
    title: "Childcare",
    icon: <Baby className="h-8 w-8 text-primary" />,
    image: "/se7.jpeg",
    description:
      "Professional care for children including newborns, toddlers, and special needs.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-lightBlue py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          Our Care Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col items-center group"
            >
              {/* Image */}
              <div className="w-full h-[180px] relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Icon */}
              <div className="mb-2 group-hover:scale-105 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1 text-primary group-hover:underline transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/80 text-center">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/booking"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
