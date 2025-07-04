// components/ui/WhatsAppFloat.tsx
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/254712345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  );
}
