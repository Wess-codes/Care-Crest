import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TopBar from "./components/layout/TopBar";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata with favicon
export const metadata: Metadata = {
  title: "Care Crest - Home Health Services",
  description: "Compassionate care at home. Book trusted health services today.",
  icons: {
    icon: "/favicon.ico", // Ensure this file exists in your /public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen bg-background text-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
