import React from "react";

interface ProductTypeProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  buttonText: string;
}

const ProductTypeCard: React.FC<ProductTypeProps> = ({
  imageUrl,
  altText,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="box-border text-center max-w-[352px] m-0 p-0 max-sm:max-w-full">
      <img
        src={imageUrl}
        className="box-border w-full h-[328px] object-cover mb-[30px] m-0 p-0"
        alt={altText}
      />
      <h3 className="box-border text-3xl mb-5 m-0 p-0">{title}</h3>
      <p className="box-border text-lg leading-[1.7] mb-[30px] m-0 p-0">
        {description}
      </p>
      <button className="box-border text-[color:var(--black)] text-base cursor-pointer m-0 px-5 py-2.5 border-[none]">
        {buttonText}
      </button>
    </div>
  );
};

const ProductTypes: React.FC = () => {
  const productTypes = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/71528be8ca4691e6abd7bd59de97aa43cea79739",
      altText: "Human size holobox",
      title: "HUMAN SIZE",
      description:
        "Díky velkoformátové holografické projekci je Human Size ideální pro prezentaci člověka v reálné velikosti - ať už se jedná o přenesení známé osobnosti, představení módních kolekcí, interaktivní asistence nebo zprostředkování virtuálních přednášek.",
      buttonText: "Více o human size",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6fb2e8b9c568dea260cc6bc267d70a8a57a4b84c",
      altText: "Product fit holobox",
      title: "PRODUCT FIT",
      description:
        "Revoluční spojení holografie a dotykového rozhraní přináší nový rozměr nakupování, kde si zákazníci mohou produkt detailně prohlédnout ze všech stran. Perfektní pro retailové prostory, e-commerce showroomy nebo specializované butiky, kde záleží na vizuální prezentaci produktů.",
      buttonText: "Více o mEDIUM BOX",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cdcfe9cde05ae848cf327c49e6cb6fc59484ceb9",
      altText: "Mini box holobox",
      title: "MINI BOX",
      description:
        "Perfektní řešení pro menší showroomy a výlohy, kde každý centimetr hraje roli. Kompaktní rozměry v kombinaci s působivou holografickou projekcí přitáhnou pozornost zákazníků a promění každý produkt v poutavý holografický zážitek..",
      buttonText: "Více o Product fit",
    },
  ];

  return (
    <section className="box-border m-0 px-[120px] py-20 max-md:p-10 max-sm:p-5">
      <h2 className="box-border text-[color:var(--purple)] text-5xl font-bold mb-10 m-0 p-0">
        Typy holoboxů
      </h2>
      <div className="box-border flex justify-between gap-10 m-0 p-0 max-md:grid-cols-[1fr] max-sm:flex-col">
        {productTypes.map((product, index) => (
          <ProductTypeCard
            key={index}
            imageUrl={product.imageUrl}
            altText={product.altText}
            title={product.title}
            description={product.description}
            buttonText={product.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductTypes;
