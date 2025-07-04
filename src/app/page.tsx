import HeroSection from "./components/home/HeroSection";
import IntroSection from "./components/home/IntroSection";
import ServicesPreview from "./components/home/ServicesPreview";
import TestimonialOrVisualSection from "./components/home/Testimonial";
import CallToActionSection from "./components/home/ActionSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <TestimonialOrVisualSection />
      <CallToActionSection />
    </main>
  );
}
