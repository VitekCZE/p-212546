
import React, { useEffect, useState, useRef } from "react";

const HeroEntrance: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start exit animation after 4 seconds (after text animations complete)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Remove the container entirely after exit animation
      const removeTimer = setTimeout(() => {
        setAnimationComplete(true);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 1000); // Match the duration of the exit animation
      
      return () => clearTimeout(removeTimer);
    }, 4500);
    
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
      <img 
        src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
        alt="Mission Box Hologram" 
        className="hero-entrance-image"
      />
      <div className="hero-entrance-text">
        <h1 className="hero-entrance-headline visible">
          Upoutejte pozornost v nové dimenzi pomocí holografie!
        </h1>
        <h2 className="hero-entrance-subheadline visible">
          Půjčte si na svou akci holobox od Mission Box
        </h2>
      </div>
    </div>
  );
};

export default HeroEntrance;
