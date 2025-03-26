
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="box-border relative text-left m-0 px-[120px] py-[130px] max-md:p-10 max-sm:p-5">
      <div className="mb-10">
        <img 
          src="/lovable-uploads/5032a47a-1c9a-4399-8639-512873d1bf23.png" 
          alt="Mission Box Holobox" 
          className="w-full max-w-[1203px] h-auto mb-10"
        />
      </div>
      <h1 className="box-border text-[27px] max-w-[432px] mb-[30px] m-0 p-0 max-md:max-w-full">
        Upoutejte pozornost v nové dimenzi pomocí holografie!
      </h1>
      <h2 className="box-border text-2xl mb-10 m-0 p-0 max-md:max-w-full">
        Půjčte si na svou akci ho lobox od Mission box
      </h2>
      <button className="box-border text-[color:var(--white)] border-[color:var(--white)] text-xl uppercase cursor-pointer bg-[color:var(--purple)] m-0 px-[21px] py-[13px] border-[0.5px] border-solid">
        Nezávazná konzultace
      </button>
    </section>
  );
};

export default Hero;
