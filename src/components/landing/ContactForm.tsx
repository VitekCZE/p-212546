import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  rentalDuration: string;
  holoboxType: string;
  term: string;
  services: {
    installation: boolean;
    content: boolean;
    liveStream: boolean;
    purchase: boolean;
  };
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    rentalDuration: "",
    holoboxType: "",
    term: "",
    services: {
      installation: false,
      content: false,
      liveStream: false,
      purchase: false,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    alert(
      "Formulář byl odeslán! V reálné aplikaci by data byla odeslána na server.",
    );
  };

  return (
    <section id="contact-form" className="box-border bg-[color:var(--dark-gray)] mx-[120px] my-20 p-16 rounded-2xl max-md:mx-10 max-md:p-10 max-sm:mx-5 max-sm:p-5">
      <div className="box-border flex gap-8 m-0 p-0 max-md:flex-col">
        <div className="box-border max-w-[423px] m-0 p-0 max-md:max-w-full">
          <h2 className="box-border text-[color:var(--purple)] text-5xl leading-[56px] mb-5 m-0 p-0">
            Chci nezávazně poptat holobox!
          </h2>
          <p className="box-border text-base leading-6 m-0 p-0">
            <span>
              Domluvte si nezávaznou online nebo osobní schůzku s našim
              obchodním zástupcem, který vám sdělí podrobnosti o ceně a veškeré
              další informace. Napsat nám můžete také přímo na
            </span>{" "}
            <a
              href="mailto:info@missionbox.io"
              className="box-border text-[color:var(--white)] underline m-0 p-0"
            >
              info@missionbox.io
            </a>
          </p>
        </div>
        <form
          className="box-border flex-1 flex flex-col gap-4 m-0 p-0"
          onSubmit={handleSubmit}
        >
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="name"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              Jméno a příjmení*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            />
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="email"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            />
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="phone"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+420"
              value={formData.phone}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            />
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="rentalDuration"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              délka pronájmu*
            </label>
            <select
              id="rentalDuration"
              name="rentalDuration"
              required
              value={formData.rentalDuration}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            >
              <option value="">Zvolte typ pronájmu</option>
              <option value="1-day">1 den</option>
              <option value="weekend">Víkend</option>
              <option value="week">Týden</option>
              <option value="month">Měsíc</option>
              <option value="custom">Vlastní</option>
            </select>
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="holoboxType"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              Typ holoboxu*
            </label>
            <select
              id="holoboxType"
              name="holoboxType"
              required
              value={formData.holoboxType}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            >
              <option value="">Zvolte typ holoboxu</option>
              <option value="human-size">Human Size</option>
              <option value="product-fit">Product Fit</option>
              <option value="mini-box">Mini Box</option>
            </select>
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label
              htmlFor="term"
              className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0"
            >
              Termín*
            </label>
            <select
              id="term"
              name="term"
              required
              value={formData.term}
              onChange={handleInputChange}
              className="box-border border bg-[color:var(--white)] m-0 p-4 border-solid border-[rgba(0,0,0,0.16)]"
            >
              <option value="">Zvolte termín</option>
              <option value="asap">Co nejdříve</option>
              <option value="next-month">Příští měsíc</option>
              <option value="next-quarter">Příští čtvrtletí</option>
              <option value="custom">Vlastní termín</option>
            </select>
          </div>
          <div className="box-border flex flex-col gap-1 m-0 p-0">
            <label className="box-border text-[color:var(--white)] text-[17px] uppercase m-0 p-0">
              Doplňkové služby
            </label>
            <div className="box-border flex flex-col gap-[5px] m-0 p-0">
              <label className="box-border text-[color:var(--white)] text-[17px] uppercase flex items-center gap-[9px] m-0 p-0">
                <input
                  type="checkbox"
                  name="installation"
                  checked={formData.services.installation}
                  onChange={handleCheckboxChange}
                  className="box-border border border-[color:var(--purple)] w-3 h-3 bg-[color:var(--white)] m-0 p-4 border-solid"
                />
                <span>Pronájem s kompletní instalací</span>
              </label>
              <label className="box-border text-[color:var(--white)] text-[17px] uppercase flex items-center gap-[9px] m-0 p-0">
                <input
                  type="checkbox"
                  name="content"
                  checked={formData.services.content}
                  onChange={handleCheckboxChange}
                  className="box-border border border-[color:var(--purple)] w-3 h-3 bg-[color:var(--white)] m-0 p-4 border-solid"
                />
                <span>Příprava 3D obsahu na míru</span>
              </label>
              <label className="box-border text-[color:var(--white)] text-[17px] uppercase flex items-center gap-[9px] m-0 p-0">
                <input
                  type="checkbox"
                  name="liveStream"
                  checked={formData.services.liveStream}
                  onChange={handleCheckboxChange}
                  className="box-border border border-[color:var(--purple)] w-3 h-3 bg-[color:var(--white)] m-0 p-4 border-solid"
                />
                <span>Holobox + studio pro live stream</span>
              </label>
              <label className="box-border text-[color:var(--white)] text-[17px] uppercase flex items-center gap-[9px] m-0 p-0">
                <input
                  type="checkbox"
                  name="purchase"
                  checked={formData.services.purchase}
                  onChange={handleCheckboxChange}
                  className="box-border border border-[color:var(--purple)] w-3 h-3 bg-[color:var(--white)] m-0 p-4 border-solid"
                />
                <span>Přímý nákup holoboxu</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="box-border text-[color:var(--white)] text-xl font-bold cursor-pointer bg-[color:var(--purple)] mt-5 m-0 p-4 border-[none]"
          >
            ODESLAT POPTÁVKU
          </button>
        </form>
      </div>
      <div className="box-border text-[color:var(--white)] text-[10px] mt-2.5 m-0 p-0">
        *Povinné položky
      </div>
    </section>
  );
};

export default ContactForm;
