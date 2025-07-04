// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-primary">{service.title}</h1>

        {/* Image */}
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden mb-6 shadow">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>

        {/* Details */}
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          {service.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/booking"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition"
          >
            Book This Service
          </Link>
        </div>
      </div>
    </section>
  );
}
