
import React, { useEffect } from "react";
import { useMouseEffect } from "@/hooks/use-mouse-effect";

const HeroWithMouseEffect: React.FC = () => {
  useMouseEffect();

  useEffect(() => {
    // Add initial animations for hero elements
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const cta = document.querySelector('.hero-cta');
    const image = document.querySelector('.hero-image');
    
    setTimeout(() => {
      title?.classList.add('is-visible');
      
      setTimeout(() => {
        subtitle?.classList.add('is-visible');
        
        setTimeout(() => {
          cta?.classList.add('is-visible');
          image?.classList.add('is-visible');
        }, 300);
      }, 300);
    }, 200);
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
        <div className="relative group md:max-w-[55%] hero-image stagger-item">
          <img 
            src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
            alt="Mission Box Holobox" 
            className="w-full max-w-[700px] h-auto z-10 relative"
          />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--purple)] to-[color:var(--green)] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithMouseEffect;
