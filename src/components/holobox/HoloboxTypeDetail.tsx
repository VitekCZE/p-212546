
import React from "react";
import { Button } from "@/components/ui/button";

interface HoloboxTypeDetailProps {
  id: string;
  name: string;
  description: string;
  note?: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  specs: string[];
}

const HoloboxTypeDetail: React.FC<HoloboxTypeDetailProps> = ({
  id,
  name,
  description,
  note,
  imageUrl,
  imagePosition,
  specs,
}) => {
  return (
    <div id={id} className="border border-[#1E90FF] p-6 mb-12">
      <h2 className="text-2xl font-bold mb-6">{name}</h2>
      
      <div className={`flex gap-12 items-start ${imagePosition === "left" ? "flex-row-reverse" : "flex-row"} max-md:flex-col`}>
        <div className="flex-1">
          <p className="text-base mb-6 leading-relaxed">{description}</p>
          
          {note && (
            <p className="text-base italic mb-6">{note}</p>
          )}
          
          <div className="mb-6">
            <h3 className="text-sm uppercase mb-3 text-gray-400">TECHNICKÉ SPECIFIKACE</h3>
            <ul className="space-y-1">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[color:var(--purple)] mr-2">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            className="bg-[color:var(--purple)] text-[color:var(--white)] rounded-full text-sm hover:bg-[color:var(--purple)]/90"
          >
            POPTÁVAT VÝROBEK
          </Button>
        </div>
        
        <div className="w-[300px] h-[350px] flex-shrink-0 max-md:w-full">
          <img 
            src={imageUrl} 
            alt={`${name} holobox`} 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HoloboxTypeDetail;
