
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="box-border bg-[color:var(--black)] m-0 px-[120px] py-10 border-t-[rgba(255,255,255,0.2)] border-t border-solid max-md:p-10 max-sm:p-5">
      <div className="mb-10">
        <img src="/lovable-uploads/606c2ccc-8919-4790-98c5-4b9fa0136ff0.png" alt="Mission Box Logo" className="h-8" />
      </div>
      <div className="box-border flex justify-between items-start m-0 p-0 max-sm:flex-col max-sm:gap-5">
        <div className="box-border flex flex-col gap-8 m-0 p-0">
          <Link to="/" className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors">
            Co je mission box?
          </Link>
          <Link to="/typy-holoboxu" className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors">
            TYPY HOLOBOXŮ
          </Link>
          <Link to="/" className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors">
            CO NABÍZÍME
          </Link>
        </div>
        <div className="box-border flex flex-col gap-8 m-0 p-0">
          <Link to="/reference" className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors">
            Reference
          </Link>
          <Link to="/faq" className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors">
            FAQs
          </Link>
          <a 
            href="#contact-form" 
            onClick={handleContactClick}
            className="box-border text-[color:var(--white)] text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors"
          >
            kontakt
          </a>
        </div>
        <div className="box-border m-0 p-0">
          <div className="box-border flex gap-[15px] m-0 p-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
