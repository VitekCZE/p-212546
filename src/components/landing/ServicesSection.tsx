
import React from "react";
import { useSectionAnimation } from "@/hooks/use-section-animation";

const ServiceItem: React.FC<{
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  index: number;
}> = ({ imageUrl, altText, title, description, index }) => {
  const serviceRef = useSectionAnimation(
    index % 2 === 0 ? 'section-slide-in-left' : 'section-slide-in-right',
    { threshold: 0.2, triggerOnce: true }
  );

  return (
    <div 
      ref={serviceRef as React.RefObject<HTMLDivElement>}
      className="box-border flex items-center gap-[60px] m-0 p-0 max-md:flex-col"
    >
      <img
        src={imageUrl}
        className="box-border w-[519px] h-[346px] object-cover m-0 p-0 max-md:w-full max-md:h-auto"
        alt={altText}
      />
      <div className="box-border m-0 p-0">
        <h3 className="box-border text-3xl uppercase mb-5 m-0 p-0">{title}</h3>
        <p className="box-border text-lg leading-[1.7] m-0 p-0">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useSectionAnimation('section-fade-in');

  const services = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a9c4b6c383c2353b519c707aed2d00ddeb33189",
      altText: "Event rental",
      title: "Pronájem Holoboxu na EVENTY",
      description:
        "Zapůjčení Holoboxu včetně natáčecího studia pro veletrhy, konference či firemní prezentace, kde se stane okamžitým magnetem pro návštěvníky. Díky realistické holografické projekci a interaktivním možnostem umožní prezentovat produkty, služby nebo branding inovativním způsobem. Součástí služby je i technická podpora, která zajistí hladký průběh celé akce.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/debbced1bf013c946e97dc01907825d708e08bfe",
      altText: "Content creation",
      title: "Tvorba holografického obsahu",
      description:
        "Každý holografický zážitek potřebuje kvalitní vizuální obsah, a proto nabízíme tvorbu 3D animací a modelů nebo natáčení ve specializovaném studiu s výsledkem optimalizovaným pro holobox. Ať už jde o produktovou prezentaci, interaktivní reklamu nebo vizuální storytelling, zprostředkujeme produkční a postprodukční proces a připravíme poutavý obsah, který maximálně využije možnosti zařízení.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bcdd716ecc7751ba94ce054eca8da7fa213f9a56",
      altText: "Interactive presentations",
      title: "Interaktivní prezentace na míru",
      description:
        "Holobox lze využít nejen pro pasivní sledování, ale i pro plně interaktivní prezentace s dotykovým ovládáním. Vytvoříme na míru obsah, který umožní zákazníkům procházet katalogy produktů, zobrazovat detaily, spouštět animace, interagovat s obsahem podle vašich představ... nebo chcete vytvořit vlastního holografického avatara? Ani to není problém! Mission Box je řešení pro showroomy, retail i edukativní prezentace na veletrzích.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/12641955d2fc1add0ebef600ff66f5ee221ef38e",
      altText: "Live streaming",
      title: "Živý přenos koncertů a akcí",
      description:
        "Díky holoboxu můžete streamovat koncerty, konference nebo firemní akce v reálném čase a přenášet vystoupení či projevy kamkoliv na světě ve formě realistické holografické projekce. Pokročilá technologie umožňuje minimální zpoždění a maximální vizuální kvalitu, takže diváci mají pocit, jako by účinkující stáli přímo před nimi.",
    },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="box-border m-0 px-[120px] py-20 max-md:p-10 max-sm:p-5"
    >
      <h2 className="box-border text-[color:var(--purple)] text-5xl font-bold mb-10 m-0 p-0">
        Co nabízíme
      </h2>
      <div className="box-border grid gap-[60px] mb-10 m-0 p-0 max-md:grid-cols-[1fr]">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            index={index}
            imageUrl={service.imageUrl}
            altText={service.altText}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <a href="#contact-form" onClick={handleContactClick}>
        <button className="cta-button box-border text-[color:var(--white)] text-xl uppercase cursor-pointer bg-[color:var(--purple)] m-0 px-[24px] py-[15px] border-[none]">
          Nezávazná konzultace
        </button>
      </a>
    </section>
  );
};

export default ServicesSection;
