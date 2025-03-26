
import React from "react";
import { Link } from "react-router-dom";

interface ProductTypeProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  buttonText: string;
  linkTo: string;
}

const ProductTypeCard: React.FC<ProductTypeProps> = ({
  imageUrl,
  altText,
  title,
  description,
  buttonText,
  linkTo,
}) => {
  return (
    <div className="box-border text-center max-w-[352px] m-0 p-0 max-sm:max-w-full">
      <img
        src={imageUrl}
        className="box-border w-full h-[328px] object-contain mb-[30px] m-0 p-0"
        alt={altText}
      />
      <h3 className="box-border text-3xl mb-5 m-0 p-0">{title}</h3>
      <p className="box-border text-lg leading-[1.7] mb-[30px] m-0 p-0">
        {description}
      </p>
      <Link to={linkTo}>
        <button className="box-border text-[color:var(--black)] text-base cursor-pointer m-0 px-5 py-2.5 border-[none] bg-[color:var(--green)]">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

const ProductTypes: React.FC = () => {
  const productTypes = [
    {
      imageUrl: "/lovable-uploads/a58221ea-5dcd-4e00-bc9a-bc2a41582e94.png",
      altText: "Human size holobox",
      title: "HUMAN SIZE",
      description:
        "Díky velkoformátové holografické projekci je Human Size ideální pro prezentaci člověka v reálné velikosti - ať už se jedná o přenesení známé osobnosti, představení módních kolekcí, interaktivní asistence nebo zprostředkování virtuálních přednášek.",
      buttonText: "Více o human size",
      linkTo: "/typy-holoboxu#human-size",
    },
    {
      imageUrl: "/lovable-uploads/f0e4cdbf-4348-4c35-921b-70e161e8716c.png",
      altText: "Product fit holobox",
      title: "PRODUCT FIT",
      description:
        "Revoluční spojení holografie a dotykového rozhraní přináší nový rozměr nakupování, kde si zákazníci mohou produkt detailně prohlédnout ze všech stran. Perfektní pro retailové prostory, e-commerce showroomy nebo specializované butiky, kde záleží na vizuální prezentaci produktů.",
      buttonText: "Více o mEDIUM BOX",
      linkTo: "/typy-holoboxu#product-fit",
    },
    {
      imageUrl: "/lovable-uploads/9091b34a-427d-4e92-a87c-7f302d92d8cb.png",
      altText: "Mini box holobox",
      title: "MINI BOX",
      description:
        "Perfektní řešení pro menší showroomy a výlohy, kde každý centimetr hraje roli. Kompaktní rozměry v kombinaci s působivou holografickou projekcí přitáhnou pozornost zákazníků a promění každý produkt v poutavý holografický zážitek..",
      buttonText: "Více o Product fit",
      linkTo: "/typy-holoboxu#mini-box",
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
            linkTo={product.linkTo}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductTypes;
