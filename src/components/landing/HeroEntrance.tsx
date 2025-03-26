
import React, { useEffect, useState, useRef } from "react";

const HeroEntrance: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start exit animation after about 6 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Remove the container entirely after exit animation
      const removeTimer = setTimeout(() => {
        setAnimationComplete(true);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 1000); // Match the duration of the exit animation
      
      return () => clearTimeout(removeTimer);
    }, 5000);
    
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (animationComplete) return null;

  return (
    <div 
      ref={containerRef}
      className={`hero-entrance-container ${isExiting ? 'exiting' : ''}`}
    >
      <div className="hero-entrance-image-wrapper">
        <img 
          src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
          alt="Mission Box Hologram" 
          className="hero-entrance-image"
        />
      </div>
    </div>
  );
};

export default HeroEntrance;
