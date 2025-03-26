import React, { useState, useEffect, useRef } from "react";

const FullscreenHero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show scroll arrow after 3 seconds
    const arrowTimer = setTimeout(() => {
      setArrowVisible(true);
    }, 3000);

    // Handle scroll events to transition the hero
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.1; // 10% of viewport height
      
      if (scrollY > threshold) {
        setScrolled(true);
        setTextVisible(true);
      } else {
        setScrolled(false);
        // Keep text visible once it's shown
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
            className={`hero-image ${scrolled ? 'scrolled' : ''}`}
          />
          
          <div className={`hero-text-container ${textVisible ? 'visible' : ''}`}>
            <h1 className="text-[32px] font-bold mb-4 text-white">
              Upoutejte pozornost v nové dimenzi pomocí holografie!
            </h1>
            <h2 className="text-2xl mb-6 text-white/90">
              Půjčte si na svou akci ho lobox od Mission box
            </h2>
            <a href="#contact-form" className="inline-block">
              <button className="cta-button box-border text-[color:var(--white)] text-xl uppercase cursor-pointer bg-[color:var(--purple)] m-0 px-[24px] py-[15px] border-[none]">
                Nezávazná konzultace
              </button>
            </a>
          </div>
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
