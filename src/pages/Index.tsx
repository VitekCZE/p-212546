
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
import { useMouseEffect } from "@/hooks/use-mouse-effect";
import "@/lib/variables.css";

const Index: React.FC = () => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  useMouseEffect();

  // Check if this is a fresh page load or a navigation from another page
  useEffect(() => {
    // Enable scrolling for this page
    document.body.style.overflow = 'auto';
    
    // Set initial load as complete after a delay to match the loading experience
    setTimeout(() => {
      setInitialLoadComplete(true);
    }, 3000); // Reduced to 3s since we're now allowing scrolling with the background video
    
    // Add animation classes to staggered items after page loads
    setTimeout(() => {
      document.querySelectorAll('.stagger-item').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, 150 * index);
      });
    }, 3300); // Wait for initialLoadComplete + a bit
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
        {/* Header will be fixed and handle its own positioning */}
        <Header />
        
        {/* Main content - now immediately visible */}
        <div style={{ visibility: initialLoadComplete ? 'visible' : 'visible' }}>
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
