
import React from "react";
import { Play } from "lucide-react";

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt }) => (
  <div className="flex items-center justify-center">
    <img src={src} alt={alt} className="h-8 max-w-[100px] object-contain" />
  </div>
);

interface ReferenceCardProps {
  category: string[];
  testimonial: string;
  author: string;
  company: string;
  imageSrc: string;
  hasVideo?: boolean;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({
  category,
  testimonial,
  author,
  company,
  imageSrc,
  hasVideo = false,
}) => (
  <div className="flex flex-col md:flex-row gap-[60px] mb-20 border-b border-gray-800 pb-10 last:border-0">
    <div className="box-border max-w-full md:max-w-[467px] m-0 p-0">
      <div className="box-border flex flex-wrap gap-[15px] mb-[30px] m-0 p-0">
        {category.map((cat, index) => (
          <span
            key={index}
            className="box-border border border-[color:var(--green)] text-[color:var(--green)] text-base uppercase m-0 px-2 py-1 rounded-[5px] border-solid"
          >
            {cat}
          </span>
        ))}
      </div>
      <blockquote className="box-border m-0 p-0 text-[color:var(--white)]">
        „{testimonial}"
      </blockquote>
      <div className="box-border m-0 p-0 mt-4 text-[color:var(--white)]">
        {author}, {company}
      </div>
    </div>
    <div className="relative">
      <img
        src={imageSrc}
        className="box-border w-full md:w-[631px] object-cover m-0 p-0 max-w-full h-auto"
        alt={`${company} reference image`}
      />
      {hasVideo && (
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[color:var(--purple)] p-4 rounded-full">
          <Play className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  </div>
);

const ClientReferences: React.FC = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "Crescent" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "ISS" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "Cinders" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "Nike" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "Unicef" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/292adf80a36c5e2f4efc109e46f61375b2f1b802", alt: "T-Mobile" },
  ];

  const references = [
    {
      category: ["KONFERENCE", "3D HOLOGRAM"],
      testimonial: "Holobox byl absolutním hitem na naší každoroční konferenci bankeřů jako futuristická holografická prezence. Hosté byli nadšení a neustále věnovali pozornost a přinesly do formálního prostředí svěží rozměr. Prezentace díky němu získaly dynamičnost a interakci. Příští rok ho rozhodně zařadím, který chvil ještě tradični program.",
      author: "Jan Novák, obchodní ředitel",
      company: "KB",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      hasVideo: true
    },
    {
      category: ["KONCERT", "ŽIVÝ PŘENOS"],
      testimonial: "Holobox posunul náš koncert na úplně novou úroveň! Díky 3D projekci jsme měli představení obohacené o vizuální zážek příběh, a fanouši byli naprosto ohromeni. Skvělá kvalita obrazu, minimální zpoždění a perfektní zvuk spolu s vystoupením nezapomenutelný zážitek.",
      author: "Kateřina Paálková, manažerka Lucie Nové",
      company: "",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      hasVideo: true
    },
    {
      category: ["VELETRH", "3D MODELACE"],
      testimonial: "Díky Holoboxu jsme na veletrhu mohli ukázat novou kolekci sneakers Nike Air Max 2024, aniž bychom museli fyzicky vozit. Zákazníci si mohli občítí model, prozkoumat detaily a interagovat s ním, což výrazně zvýšilo zájem o produkt. Výjímečně technické UI parametry. Perfektní nástroj pro inovativní prezentaci!",
      author: "Jan Novák, obchodní ředitel NIKE",
      company: "",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      hasVideo: true
    },
    {
      category: ["ŽIVÝ PŘENOS", "VIRTUÁLNÍ ASISTENTKA"],
      testimonial: "Holobox jsme využili pro virtuální pokladnu v našem obchodě, která komunikuje s zákazníky nad poklady v reálném čase. Díky realistické holografické projekci si přicházíte, jako je lidský pracovník, ale s maximální efektivitou a moderním efektním řešení, které skvělo doplnilo náš zákaznický servis.",
      author: "Kateřina Paálková, manažerka Lucie Nové",
      company: "",
      imageSrc: "/lovable-uploads/1be3958b-26a1-4c86-89af-5c67b8cfc1c5.png",
      hasVideo: true
    }
  ];

  return (
    <div className="box-border m-0 px-[120px] py-10 max-md:p-10 max-sm:p-5">
      <div className="flex flex-wrap justify-center items-center gap-10 mb-16 py-8 border-t border-b border-gray-800">
        {logos.map((logo, index) => (
          <ClientLogo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
      
      <div className="mt-8">
        {references.map((reference, index) => (
          <ReferenceCard key={index} {...reference} />
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <div dangerouslySetInnerHTML={{
          __html: `<svg id="776:472" layer-name="Buttons" width="95" height="17" viewBox="0 0 95 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-dots" style="margin: 0 auto; padding: 0; box-sizing: border-box"> <circle cx="8.5" cy="8.5" r="8.5" fill="#AF7FE3"></circle> <circle cx="34.5" cy="8.5" r="8.5" fill="url(#paint0_linear_776_472)"></circle> <defs> <linearGradient id="paint0_linear_776_472" x1="34.5" y1="0" x2="34.5" y2="17" gradientUnits="userSpaceOnUse"> <stop stop-color="#AF7FE3"></stop> <stop offset="1" stop-color="#CCE8D9"></stop> </linearGradient> </defs> </svg>`
        }} />
      </div>
    </div>
  );
};

export default ClientReferences;
