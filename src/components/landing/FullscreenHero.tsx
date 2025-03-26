
import React, { useState, useEffect, useRef } from "react";

const FullscreenHero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show image and scroll arrow after a short delay
    setImageLoaded(true);
    
    const arrowTimer = setTimeout(() => {
      setArrowVisible(true);
    }, 3000); // Changed from 1500ms to 3000ms (3 seconds)

    // Handle scroll events to transition the hero
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.1; // 10% of viewport height
      
      if (scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check if we're already scrolled
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(arrowTimer);
    };
  }, []);

  const handleArrowClick = () => {
    // Scroll down one viewport height
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div 
      ref={heroRef}
      className={`fullscreen-hero ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="fullscreen-hero-content">
        <div className={`hero-image-container ${scrolled ? 'scrolled' : ''}`}>
          <img 
            src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
            alt="Mission Box Holobox" 
            className={`hero-image ${scrolled ? 'scrolled' : ''} ${imageLoaded ? 'loaded' : ''}`}
          />
        </div>
        
        <div 
          className={`scroll-down-arrow ${arrowVisible ? 'visible' : ''}`}
          onClick={handleArrowClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FullscreenHero;
