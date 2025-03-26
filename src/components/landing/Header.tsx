
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past the hero section (100vh)
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.5; // 50% of the viewport height
      
      setScrolled(scrollPosition > 50); // Add shadow after small scroll
      setVisible(scrollPosition > threshold); // Show after scrolling past half of hero
    };

    // Check initially
    handleScroll();
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { text: "Co je mission box", link: "/" },
    { text: "typy holoboxů", link: "/typy-holoboxu" },
    { text: "CO NABÍZÍME", link: "/" },
    { text: "rEFERENCE", link: "/reference" },
    { text: "FAQs", link: "/faq" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto box-border flex justify-between items-center m-0 px-[120px] py-6 max-md:p-10 max-sm:p-5">
        <div>
          <Link to="/">
            <img src="/lovable-uploads/606c2ccc-8919-4790-98c5-4b9fa0136ff0.png" alt="Mission Box Logo" className="h-8" />
          </Link>
        </div>
        <nav className="box-border flex items-center m-0 p-0">
          <div className="box-border flex gap-8 items-center m-0 p-0 max-md:hidden">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="box-border text-base uppercase cursor-pointer m-0 p-0 hover:text-[color:var(--purple)] transition-colors"
              >
                {item.text}
              </Link>
            ))}
            <a href="#contact-form" onClick={handleContactClick} className="box-border">
              <button className="cta-button box-border text-[color:var(--white)] text-[13px] uppercase bg-[color:var(--purple)] m-0 px-5 py-3 border-[none]">
                Nezávazná konzultace
              </button>
            </a>
          </div>
          
          {/* Mobile Menu */}
          <div className="hidden max-md:block">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-[color:var(--black)] text-white p-6">
                <div className="flex flex-col space-y-6 mt-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-base uppercase hover:text-[color:var(--purple)] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                  <a 
                    href="#contact-form" 
                    onClick={handleContactClick}
                    className="inline-block"
                  >
                    <button className="cta-button text-[color:var(--white)] text-[13px] uppercase bg-[color:var(--purple)] px-5 py-3 border-[none]">
                      Nezávazná konzultace
                    </button>
                  </a>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
