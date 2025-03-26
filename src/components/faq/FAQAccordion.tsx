
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleMinus, CirclePlus } from "lucide-react";

const FAQAccordion: React.FC = () => {
  const faqItems = [
    {
      question: "Co je holobox?",
      answer: "Holobox je dotykový display s vysokým rozlišením, který díky podsvícení vytváří 3D holografickou iluzi bez nutnosti brýlí či speciálních zařízení. Představte si živý, realistický hologram v životní velikosti, který můžete vidět, slyšet a dokonce i ovládat dotykem, 24/7."
    },
    {
      question: "Pro koho je holobox?",
      answer: "Holobox nachází uplatnění všude tam, kde je potřeba zaujmout a prezentovat inovativním způsobem. Je perfektní volbou pro značky a firmy, které chtějí vyniknout na veletrzích, výstavách nebo třeba při promování nového produktu. Holobox je také skvělou ozdobou jakéhokoliv eventu, kterou nikdo nepřehlédne."
    },
    {
      question: "Jaký je rozdíl mezi holoboxy Human Size, Medium Box, a Product Fit?",
      answer: "Holobox Human Size je konstruován pro projekci osob v životní velikosti, což vytváří působivý efekt skutečné přítomnosti, ideální pro konference, prezentace a eventy, kde chcete zanechat silný dojem. Product Fit je navržen pro projekci středně velkých objektů, domácích mazlíčků, perfektní pro prezentaci luxusních produktů, designových předmětů nebo techniky v showroomech, kde vynikne každý detail. Mini Box představuje kompaktní mobilní řešení specializované na menší produkty, ideální pro cestování na veletrhy, instalace v butikách nebo v prodejnách s omezeným prostorem, kde dokáže efektivně přitáhnout pozornost zákazníků. Každý model je optimalizovaný pro specifické použití, od velkoformátových prezentací s Human Size, přes středně velké produkty s Product Fit, až po mobilní řešení s Mini Box."
    },
    {
      question: "Co vše je zahrnuto v ceně pronájmu a kolik to stojí?",
      answer: "Poskytujeme kompletní služby od A do Z, včetně dopravy, profesionální instalace a závěrečné demontáže. Po celou dobu pronájmu můžete mít k dispozici virtuální, případně osobní technickou podporu a pohotovostní servis. Součástí je také implementace vašeho obsahu nebo přípravy obsahu od základu. Pomůžeme vám s optimálním umístěním v prostoru a nastavením všech parametrů pro maximální vizuální dojem. Cena pronájmu je úzce spojena s obsahem, rozsahem služeb a délkou pronájmu. Neváhejte nás kontaktovat, rádi Vám připravíme cenovou nabídku na míru."
    },
    {
      question: "Jak dlouho trvá příprava obsahu od vás?",
      answer: "Časová náročnost se odvíjí od komplexnosti vašeho požadavku a typu obsahu. Postup lze přirovnat k tvorbě jakéhokoliv audiovizuálního obsahu. V případě potřeby lze zvolit expresní postup a lhůtu pro dodání zkrátit na minimálně 7 dní."
    },
    {
      question: "Můžeme použít existující video materiály?",
      answer: "Maximální potenciál holoboxu odemknete s obsahem vytvořeným speciálně pro holografickou projekci, který nabízí bezkonkurenční vizuální zážitek a interaktivitu. Zatímco běžná 2D videa neposkytují plnohodnotný 3D efekt, který dokáže skutečně zaujmout publikum. Neváhejte nám zaslat vaše stávající materiály - naši experti je posoudí a připraví návrh, jak dosáhnout nejlepších výsledků pro váš konkrétní případ."
    },
    {
      question: "Jak dlouho dopředu je třeba objednat pronájem?",
      answer: "Pro standardní pronájem doporučujeme rezervaci minimálně 2 týdny předem, což nám umožní zajistit dostupnost požadovaného modelu a připravit vše potřebné. U větších akcí nebo při požadavku na tvorbu vlastního obsahu je ideální začít s přípravami 1-2 měsíce předem. Pro pravidelné zákazníky nabízíme možnost dlouhodobé rezervace s prioritním zacházením. V případě akutní potřeby se vždy snažíme najít řešení."
    },
    {
      question: "Je možné holobox přemístit během akce?",
      answer: "Přesun holoboxu během akce je technicky možný, ale vyžaduje odbornou manipulaci naším vyškoleným týmem. Je nutné tento požadavek plánovat předem a zahrnout do harmonogramu akce dostatečnou časovou rezervu. Přemístění může ovlivnit kalibraci a nastavení, proto po každém přesunu provádíme kompletní kontrolu a seřízení. Holobox má kolečka, která umožňují manipulaci na malé vzdálenosti. Při přesunech např. do jiného patra nebo po schodech je potřeba odborná manipulace. Případné přesuny během akce jsou zpoplatněny podle náročnosti a vzdálenosti."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full border-t border-[rgba(255,255,255,0.2)]">
      {faqItems.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border-b border-[rgba(255,255,255,0.2)] py-4"
        >
          <AccordionTrigger className="flex justify-between items-center w-full text-left py-2 text-lg font-medium hover:no-underline">
            <span>{item.question}</span>
            {/* Custom icons for open/closed state */}
            <CirclePlus className="h-6 w-6 shrink-0 text-[color:var(--purple)] transition-all group-data-[state=open]:hidden" />
            <CircleMinus className="h-6 w-6 shrink-0 text-[color:var(--purple)] transition-all hidden group-data-[state=open]:block" />
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-300 pt-2 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
