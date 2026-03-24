import { useScrollReveal } from "@/hooks/useScrollReveal";
import HeroSection from "@/components/HeroSection";
import ChecklistSection from "@/components/ChecklistSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsApp";

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="overflow-x-hidden">
      <HeroSection />
      <hr className="gold-divider" />
      <ChecklistSection />
      <hr className="gold-divider" />
      <ServicesSection />
      <hr className="gold-divider" />
      <SocialProofSection />
      <hr className="gold-divider" />
      <LocationSection />
      <hr className="gold-divider" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
