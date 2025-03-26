
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
    }, 7000); // Increased time to allow for video to play a bit longer
    
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
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 1s ease'
      }}
    >
      <div className="hero-entrance-video-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/1Cggr7g-TX4?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&mute=0&start=0&playlist=1Cggr7g-TX4" 
          title="Mission Box Hologram"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default HeroEntrance;
