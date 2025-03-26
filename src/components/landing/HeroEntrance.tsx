
import React, { useEffect, useState, useRef } from "react";

const HeroEntrance: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start exit animation after video ends (about 6 seconds)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Remove the container entirely after exit animation
      const removeTimer = setTimeout(() => {
        setAnimationComplete(true);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 1000); // Match the duration of the exit animation
      
      return () => clearTimeout(removeTimer);
    }, 6000);
    
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';
    
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // If autoplay fails (common on mobile), we still want to proceed after 6s
      });
    }
    
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
      <video 
        ref={videoRef}
        className="hero-entrance-video"
        playsInline
        muted
        src="https://www.youtube.com/embed/1Cggr7g-TX4?autoplay=1&controls=0&showinfo=0&rel=0&loop=0&start=0&end=6"
        type="video/mp4"
      >
        {/* Fallback for browsers that don't support video */}
        <img 
          src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
          alt="Mission Box Hologram" 
          className="hero-entrance-image"
        />
      </video>
    </div>
  );
};

export default HeroEntrance;
