
import React from "react";
import { useSectionAnimation } from "@/hooks/use-section-animation";

const AboutSection: React.FC = () => {
  const sectionRef = useSectionAnimation('section-fade-in');

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>} 
      className="box-border bg-[color:var(--black)] m-0 px-[120px] py-20 max-md:p-10 max-sm:p-5"
    >
      <h2 className="box-border text-[color:var(--purple)] text-5xl font-bold mb-10 m-0 p-0">
        Co je to Mission Box?
      </h2>
      <p className="box-border text-[27px] max-w-[643px] mb-10 m-0 p-0">
        Technologický zážitek, který umožňuje překročit hranice běžné prezentace
        nebo reklamy. Holobox dodá vaší značce i eventům hloubku.
      </p>
      <div className="box-border flex gap-10 m-0 px-0 py-10 border-y-[rgba(255,255,255,0.2)] border-t border-solid border-b max-sm:flex-col">
        <div className="stagger-item box-border flex-1 m-0 p-0">
          <h3 className="box-border text-[color:var(--purple)] text-[17px] font-bold mb-5 m-0 p-0">
            FLEXIBILNÍ TYPY PRONÁJMU
          </h3>
          <p className="box-border text-[17px] leading-normal m-0 p-0">
            Vy přinesete nápad, záměr nebo produkt a my se postaráme o vše
            ostatní. Jsme schopni zajistit 3D obsah na míru i veškerý servis,
            který je k holoboxu potřeba.
          </p>
        </div>
        <div className="stagger-item box-border flex-1 m-0 p-0">
          <h3 className="box-border text-[color:var(--purple)] text-[17px] font-bold mb-5 m-0 p-0">
            PROFESIONÁLNÍ TECHNICKÁ PODPORA
          </h3>
          <p className="box-border text-[17px] leading-normal m-0 p-0">
            Nemusíte se o nic starat, veškerý servis, instalaci i zprovoznění
            zajistí náš tým.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
