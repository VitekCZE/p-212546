
import React, { useState, useEffect } from "react";
import Header from "@/components/landing/Header";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductTypes from "@/components/landing/ProductTypes";
import References from "@/components/landing/References";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import FullscreenHero from "@/components/landing/FullscreenHero";
import Hero from "@/components/landing/Hero";
import "@/lib/variables.css";

const Index: React.FC = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(true);

  // Check if this is a fresh page load or a navigation from another page
  useEffect(() => {
    // Enable scrolling for this page
    document.body.style.overflow = 'auto';
    
    // Set initial load as complete immediately
    setInitialLoadComplete(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
        {/* Header is always visible */}
        <Header />
        
        {/* Main content */}
        <div style={{ visibility: initialLoadComplete ? 'visible' : 'hidden' }}>
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
