// src/app/blog/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

 const posts = [
  {
    title: "How In-Home Care Improves Recovery",
    excerpt: "Discover the benefits of recovering at home with professional care assistance.",
    full: "Patients who recover at home often experience less stress, better sleep, and increased emotional support. Care Crest ensures safety, medication adherence, and emotional well-being throughout recovery.",
    image: "/se13.jpeg",
    category: "Health & Recovery",
    author: "Jane Doe",
    date: "July 2, 2025",
  },
  {
    title: "Caring for Loved Ones with Dementia",
    excerpt: "Tips and strategies for supporting family members experiencing memory loss.",
    full: "Structured routines, patience, and a calm environment make all the difference. Our team is trained to help families maintain dignity and improve daily life through personalized dementia care.",
    image: "/se12.jpeg",
    category: "Dementia Care",
    author: "John Mwangi",
    date: "June 28, 2025",
  },
  {
    title: "Why Families Choose In-Home Palliative Care",
    excerpt: "Learn how palliative care provides comfort and peace for loved ones facing illness.",
    full: "Palliative care helps manage pain and improve quality of life. Our caregivers support families emotionally and physically, enabling them to focus on moments that matter most.",
    image: "/se15.jpeg",
    category: "Palliative Support",
    author: "Faith Kamau",
    date: "June 15, 2025",
  },
  {
    title: "Safe & Loving Childcare in Your Home",
    excerpt: "From toddlers to special needs children — home-based care matters.",
    full: "Children thrive in familiar environments. Our caregivers provide attentive supervision, educational activities, and emotional nurturing so children feel safe and loved at home.",
    image: "/se7.jpeg",
    category: "Childcare",
    author: "Peter Otieno",
    date: "June 10, 2025",
  },
];


export default function BlogPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="w-full px-6 md:px-10 lg:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition border overflow-hidden"
          >
            {/* Image */}
            <div className="h-56 w-full relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <span className="text-sm text-primary font-medium mb-1">{post.category}</span>
              <h2 className="text-2xl font-semibold mb-2 text-foreground">{post.title}</h2>
              <p className="text-sm text-muted mb-3">{post.excerpt}</p>

              {/* Metadata */}
              <p className="text-xs text-gray-500 mb-4">
                By {post.author} • {post.date}
              </p>

              {/* Expandable content */}
              {expanded === index && (
                <p className="text-sm text-gray-700 mb-4">{post.full}</p>
              )}

              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="text-primary font-medium text-sm underline self-start"
              >
                {expanded === index ? "Show less" : "Read more"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
