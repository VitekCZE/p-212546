import React, { useState, useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

const FullscreenHero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start the loading progress animation
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setShowLoader(false);
            setImageLoaded(true);
          }, 200);
          return 100;
        }
        return prev + 4; // Increment to complete in roughly 2.5 seconds
      });
    }, 100);

    // Show arrow after 3 seconds
    const arrowTimer = setTimeout(() => {
      setArrowVisible(true);
    }, 3000);

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
      clearInterval(loadingInterval);
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
      {showLoader && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black">
          <div className="w-64 mx-auto mb-4">
            <Progress value={loadingProgress} className="h-2 bg-gray-800" />
          </div>
          <p className="text-white text-sm">Loading {loadingProgress}%</p>
        </div>
      )}
      
      <div className="fullscreen-hero-content">
        <div className="video-background absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <iframe 
              src="https://www.youtube.com/embed/1Cggr7g-TX4?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=1&start=0&playlist=1Cggr7g-TX4" 
              title="Mission Box Hologram"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute w-full h-full object-cover pointer-events-none"
              style={{ 
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            ></iframe>
          </div>
        </div>
        
        {/* Optional: If you still want to keep the image as a fallback or overlay */}
        <div className={`hero-image-container ${scrolled ? 'scrolled' : ''} opacity-0`}>
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

