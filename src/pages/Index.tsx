
import React, { useState, useEffect } from "react";
import Header from "@/components/landing/Header";
import HeroWithMouseEffect from "@/components/landing/HeroWithMouseEffect";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductTypes from "@/components/landing/ProductTypes";
import References from "@/components/landing/References";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import HeroEntrance from "@/components/landing/HeroEntrance";
import "@/lib/variables.css";

const Index: React.FC = () => {
  const [showEntrance, setShowEntrance] = useState(true);

  // Check if this is a fresh page load or a navigation from another page
  useEffect(() => {
    // If navigating from another page, skip the entrance animation
    const isNavigatingBack = window.performance
      .getEntriesByType('navigation')
      .some((nav: any) => nav.type === 'back_forward');
      
    if (isNavigatingBack) {
      setShowEntrance(false);
    }

    // Also check for session storage flag to avoid playing the video multiple times
    const hasSeenVideo = sessionStorage.getItem('hasSeenIntroVideo');
    if (hasSeenVideo) {
      setShowEntrance(false);
    } else {
      // Set flag to avoid playing again during this session
      sessionStorage.setItem('hasSeenIntroVideo', 'true');
    }
  }, []);

  return (
    <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
      {showEntrance && <HeroEntrance />}
      <Header />
      <main>
        <HeroWithMouseEffect />
        <AboutSection />
        <ServicesSection />
        <ProductTypes />
        <References />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
