
import React from "react";
import { useSectionAnimation } from "@/hooks/use-section-animation";

const References: React.FC = () => {
  const sectionRef = useSectionAnimation('section-slide-in-right');
  const quoteRef = useSectionAnimation('section-scale-in', { 
    threshold: 0.3, 
    triggerOnce: true 
  });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="box-border m-0 px-[120px] py-20 max-md:p-10 max-sm:p-5"
    >
      <h2 className="box-border text-[color:var(--purple)] text-5xl font-bold mb-10 m-0 p-0">
        Reference
      </h2>
      <div className="box-border flex gap-[60px] mb-10 m-0 p-0 max-sm:flex-col">
        <div 
          ref={quoteRef as React.RefObject<HTMLDivElement>}
          className="box-border max-w-[467px] m-0 p-0 max-sm:max-w-full"
        >
          <div className="box-border flex gap-[15px] mb-[30px] m-0 p-0">
            <span className="stagger-item box-border border border-[color:var(--green)] text-[color:var(--green)] text-base uppercase m-0 px-2 py-1 rounded-[5px] border-solid">
              VELETRHY
            </span>
            <span className="stagger-item box-border border border-[color:var(--green)] text-[color:var(--green)] text-base uppercase m-0 px-2 py-1 rounded-[5px] border-solid" style={{ transitionDelay: '150ms' }}>
              3D modelace
            </span>
          </div>
          <blockquote className="stagger-item box-border m-0 p-0" style={{ transitionDelay: '300ms' }}>
            „Holobox od Mission Boxu jsme využili na veletrhu bio potravin
            Biofach. Perfektně nám sloužil na prezentaci produktů, pro které
            máme předběžný design, ale ještě nejsou na trhu. Mohli jsme tak
            testovat reakce veřejnosti, aniž bychom museli tvořit makety, které
            většinou stejně nefungují nebo zbytečně uspěchávat výrobu produktu.
            Vřele doporučujeme!&quot;
          </blockquote>
          <div className="stagger-item box-border m-0 p-0 mt-4" style={{ transitionDelay: '450ms' }}>
            Pavel Trnka, CMO Living Econic (LifeFood)
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802"
          className="box-border w-[631px] h-[473px] object-cover m-0 p-0 max-md:w-full max-md:h-auto stagger-item"
          alt="Reference image"
          style={{ transitionDelay: '600ms' }}
        />
      </div>
      <div className="box-border m-0 p-0">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;776:472&quot; layer-name=&quot;Buttons&quot; width=&quot;95&quot; height=&quot;17&quot; viewBox=&quot;0 0 95 17&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-dots&quot; style=&quot;margin: 0 auto; padding: 0; box-sizing: border-box&quot;> <circle cx=&quot;8.5&quot; cy=&quot;8.5&quot; r=&quot;8.5&quot; fill=&quot;#AF7FE3&quot;></circle> <circle cx=&quot;34.5&quot; cy=&quot;8.5&quot; r=&quot;8.5&quot; fill=&quot;url(#paint0_linear_776_472)&quot;></circle> <defs> <linearGradient id=&quot;paint0_linear_776_472&quot; x1=&quot;34.5&quot; y1=&quot;0&quot; x2=&quot;34.5&quot; y2=&quot;17&quot; gradientUnits=&quot;userSpaceOnUse&quot;> <stop stop-color=&quot;#AF7FE3&quot;></stop> <stop offset=&quot;1&quot; stop-color=&quot;#CCE8D9&quot;></stop> </linearGradient> </defs> </svg>",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default References;
