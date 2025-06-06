'use client'
import HeroSection from "@/components/Hero";
import WorkSection from "@/components/Work";
import ContactSection from "@/components/Contact";
import FAQSection from "@/components/F&Q";

const App = () => {
  return (
      <div className="min-h-screen">
        <HeroSection />
        <WorkSection />
        <ContactSection />
        <FAQSection />
      </div>
  );
};

export default App;