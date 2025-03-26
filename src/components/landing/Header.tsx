
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { text: "Co je mission box", link: "/" },
    { text: "typy holoboxů", link: "/typy-holoboxu" },
    { text: "CO NABÍZÍME", link: "/" },
    { text: "rEFERENCE", link: "/" },
    { text: "FAQs", link: "/" },
  ];

  return (
    <div className="box-border flex justify-between items-center m-0 px-[120px] py-10 max-md:p-10 max-sm:p-5">
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
              className="box-border text-base uppercase cursor-pointer m-0 p-0"
            >
              {item.text}
            </Link>
          ))}
          <a href="#contact-form" className="box-border">
            <button className="cta-button box-border text-[color:var(--white)] text-[13px] uppercase bg-[color:var(--purple)] m-0 px-5 py-3 transition-all hover:bg-[color:var(--purple)]/80">
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
                    className="text-base uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
                <a 
                  href="#contact-form" 
                  onClick={() => setOpen(false)}
                  className="cta-button text-[color:var(--white)] text-[13px] uppercase bg-[color:var(--purple)] px-5 py-3 self-start"
                >
                  Nezávazná konzultace
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Header;
