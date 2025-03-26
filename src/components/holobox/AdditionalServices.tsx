
import React from "react";

interface ServiceCategory {
  title: string;
  items: string[];
}

const AdditionalServices: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "PRONÁJEM S KOMPLETNÍ INSTALACÍ",
      items: [
        "Doprava a profesionálně vyškolení technici na místě akce",
        "Zkušební provoz předem v našem ateliéru",
        "Odvoz a demontáž ZDARMA",
        "Mobilní technologické i dekorativní upgradesy"
      ]
    },
    {
      title: "PŘÍPRAVA 3D OBSAHU NA MÍRU",
      items: [
        "Vytvoření personalizované holorafické studio podle požadavků",
        "Natáčení lidské postavy přímo v našem studiu",
        "Úprava nebo digitalizace vašich objektů pro maximální působivost",
        "Animace produktů",
        "Vytváření obsahu příd firemním požadavkům"
      ]
    },
    {
      title: "HOLOBOX + STUDIO PRO LIVE STREAM",
      items: [
        "Mobilní stuio s plynulou 4K projekce pro tabulý",
        "Přenos řečníka nebo moderátora v reálných barvách zároveň",
        "Živý přenos z místnosti či ze vzdálené lokace",
        "Vhodné pro firemní eventy a zábavné prezentace"
      ]
    },
    {
      title: "PŘÍMÝ NÁKUP PRODUKTŮ",
      items: [
        "Kompletní dodání na klíč včetně instalace",
        "Zaškolení obsluhy a technické podpory",
        "Možnost dokoupení pravidelného servisu"
      ]
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-10">DOPLŇKOVÉ SLUŽBY</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-sm text-gray-400 uppercase mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-[color:var(--purple)] mr-2">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalServices;
