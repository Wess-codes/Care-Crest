"use client";

import {
  HeartPulse,
  Brain,
  Syringe,
  Smile,
  Baby,
  AccessibilityIcon,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    name: "Elder Care",
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
  },
  {
    name: "Dementia Care",
    icon: <Brain className="w-10 h-10 text-primary" />,
  },
  {
    name: "Post-Op Recovery",
    icon: <Syringe className="w-10 h-10 text-primary" />,
  },
  {
    name: "Disability Support",
    icon: <AccessibilityIcon className="w-10 h-10 text-primary" />,
  },
  {
    name: "Palliative Care",
    icon: <Smile className="w-10 h-10 text-primary" />,
  },
  {
    name: "Childcare",
    icon: <Baby className="w-10 h-10 text-primary" />,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-lightBlue py-24 px-6 md:px-10 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-foreground">
          Our Core Services
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center flex flex-col items-center gap-4"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-foreground">
                {service.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/services"
            className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
