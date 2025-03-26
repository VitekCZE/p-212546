
import React, { useState, useEffect } from "react";
import Header from "@/components/landing/Header";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductTypes from "@/components/landing/ProductTypes";
import References from "@/components/landing/References";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import HeroEntrance from "@/components/landing/HeroEntrance";
import FullscreenHero from "@/components/landing/FullscreenHero";
import Hero from "@/components/landing/Hero";
import "@/lib/variables.css";

const Index: React.FC = () => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // Check if this is a fresh page load or a navigation from another page
  useEffect(() => {
    // If navigating from another page, skip the entrance animation
    const isNavigatingBack = window.performance
      .getEntriesByType('navigation')
      .some((nav: any) => nav.type === 'back_forward');
      
    if (isNavigatingBack) {
      setShowEntrance(false);
      setInitialLoadComplete(true);
    }

    // Also check for session storage flag to avoid playing the video multiple times
    const hasSeenVideo = sessionStorage.getItem('hasSeenIntroVideo');
    if (hasSeenVideo) {
      setShowEntrance(false);
      setInitialLoadComplete(true);
    } else {
      // Set flag to avoid playing again during this session
      sessionStorage.setItem('hasSeenIntroVideo', 'true');
      
      // Mark initial load as complete after entrance animation finishes
      const timer = setTimeout(() => {
        setInitialLoadComplete(true);
      }, 6000); // Match the duration in HeroEntrance component
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
        {showEntrance && <HeroEntrance />}
        <div style={{ visibility: initialLoadComplete ? 'visible' : 'hidden' }}>
          <Header />
          <main>
            <FullscreenHero />
            <div style={{ marginTop: '100vh' }}> {/* Spacer to accommodate fullscreen hero */}
              <Hero />
              <AboutSection />
              <ServicesSection />
              <ProductTypes />
              <References />
              <ContactForm />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
