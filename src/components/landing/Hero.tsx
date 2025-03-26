
import React, { useEffect, useRef } from "react";
import { useMouseEffect } from "@/hooks/use-mouse-effect";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useMouseEffect();

  // Add parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (window.innerWidth / 2 - clientX) / 25;
      const yPos = (window.innerHeight / 2 - clientY) / 25;
      
      imageRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="box-border relative m-0 px-[120px] py-[80px] max-md:p-10 max-sm:p-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:max-w-[45%] text-left">
          <h1 className="hero-title stagger-item box-border text-[32px] max-w-[500px] mb-[30px] m-0 p-0 max-md:max-w-full">
            Upoutejte pozornost v nové dimenzi pomocí holografie!
          </h1>
          <h2 className="hero-subtitle stagger-item box-border text-2xl mb-10 m-0 p-0 max-md:max-w-full">
            Půjčte si na svou akci ho lobox od Mission box
          </h2>
          <a href="#contact-form" onClick={handleContactClick} className="inline-block hero-cta stagger-item">
            <button className="cta-button box-border text-[color:var(--white)] text-xl uppercase cursor-pointer bg-[color:var(--purple)] m-0 px-[24px] py-[15px] border-[none]">
              Nezávazná konzultace
            </button>
          </a>
        </div>
        <div className="relative md:max-w-[55%] hero-image-wrapper">
          <div 
            ref={imageRef}
            className="hero-image-container transition-transform duration-300 ease-out"
          >
            <img 
              src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
              alt="Mission Box Holobox" 
              className="w-full max-w-[700px] h-auto z-10 relative object-cover hero-image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 opacity-0 transition-opacity duration-300 rounded-lg blur-sm hover-glow"></div>
          </div>
          <div className="mouse-cursor-custom absolute w-40 h-40 rounded-full border-2 border-[color:var(--purple)] opacity-0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
