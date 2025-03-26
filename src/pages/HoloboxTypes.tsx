
import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import HoloboxTypeDetail from "@/components/holobox/HoloboxTypeDetail";
import AdditionalServices from "@/components/holobox/AdditionalServices";
import { Button } from "@/components/ui/button";
import "@/lib/variables.css";

const HoloboxTypes: React.FC = () => {
  return (
    <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
      <Header />
      <main className="px-[120px] py-20 max-md:p-10 max-sm:p-5">
        <h1 className="text-[color:var(--purple)] text-5xl font-bold text-center mb-16">
          Vyberte si z těchto druhů holoboxů
        </h1>

        <div className="flex flex-col gap-12">
          <HoloboxTypeDetail
            id="human-size"
            name="HUMAN SIZE"
            description="Díky velkoformátové projekci a pokročilé technologii dosáhne prezentace živoucnosti, kterou nikde jinde neuvidíte. Holobox je ideální pro přenos holografické prezentace člověka v reálné velikosti. Holografické prezentace s dotykovým ovládáním navíc může vaše návštěvníky nadchnout a přivést k prezentovaným výrobkům."
            note="Holobox Human Size je také velmi efektivní pro komerční / přímou komunikaci s publikem v reálném čase."
            imageUrl="/lovable-uploads/d883bf61-a31d-48d1-be0c-817c7fb03e13.png"
            imagePosition="right"
            specs={[
              "Označení monitoru 65 palová (165 cm)",
              "Rozměry: 940 x 2160 (W×H)",
              "Velikost: 940 mm x 2010 mm x 620 mm",
              "Podporuje FULL rozlišení",
              "Hmotnost: 130 kg",
              "Konektivita: HDMI, Ethernet, USB port, WiFi",
              "Zabudovaný disk"
            ]}
          />

          <HoloboxTypeDetail
            id="product-fit"
            name="PRODUCT FIT"
            description="Možnost do detailu se seznámit, lépe chápat a objevovat zákazníky pomocí prezentace s použitím holografiky přímo produktů. Holografické prezentace s dotykovým ovládáním všeho demenších modelů, co zobrazujete či plánujete do prezentovat představuje unikátnost, komerční úspěch či příjemný bonus pro vaše zákazníky nebo návštěvníky. Holografie předmětů přesáhuje hranice vaší představivosti."
            imageUrl="/lovable-uploads/cc6d0b30-7d9b-4671-940a-2a84be1a70e6.png"
            imagePosition="right"
            specs={[
              "Označení monitoru 42 palcová (104cm)",
              "Rozměrůy: 690 x 740",
              "Hmotnost: 65 kg",
              "Vestavěná LED reproduktory",
              "1 dotykovým ovládáním",
              "Zabudovaný disk"
            ]}
          />

          <HoloboxTypeDetail
            id="mini-box"
            name="MINI BOX"
            description="Působivá holografická projekce dokumentů, knih, či příručí i dalších vytištěných materiálů, které mohou být součástí, třeba vašeho cílového snažení ve showroomech, ale i na pultech a výlohy. Mini velikost přitáhne pozornost kolemjdoucích, umožní jejich zapojení a zviditelnění. Ať už se jedná o sběratelské předměty, módní doplňky, drahé šperky či technické novinky rozptýlení prostředkých tvarů. Pokud hledáte něco, co ihned uchvátí, jste na správné cestě."
            imageUrl="/lovable-uploads/4869c351-3acc-464a-b76f-ea5cf8f0704d.png"
            imagePosition="right"
            specs={[
              "32 palcová (84cm)",
              "Velikost: 510 x 340",
              "640 x 361 x 230 mm",
              "Vestavěný WiFi reproduktor",
              "Zabudovaný disk"
            ]}
          />
        </div>

        <AdditionalServices />

        <div className="flex justify-center mt-16">
          <Button 
            className="bg-[color:var(--purple)] text-[color:var(--white)] text-lg uppercase px-8 py-4 rounded-none hover:bg-[color:var(--purple)]/90"
          >
            NEZÁVAZNÁ KONZULTACE
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HoloboxTypes;
