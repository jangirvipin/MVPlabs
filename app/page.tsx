'use client'
import HeroSection from "@/components/Hero";
import WorkSection from "@/components/Work";
import ContactSection from "@/components/Contact";
import FAQSection from "@/components/F&Q";
import PricingSection from "@/components/Pricing";



const App = () => {
  return (
      <div className="min-h-screen">
        <HeroSection />
        <WorkSection />
        <ContactSection />
          <PricingSection />
        <FAQSection />
      </div>
  );
};

export default App;