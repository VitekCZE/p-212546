
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
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;776:519&quot; width=&quot;151&quot; height=&quot;27&quot; viewBox=&quot;0 0 151 27&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;logo&quot; style=&quot;margin: 0; padding: 0; box-sizing: border-box; width: 151px; height: 26px&quot;> <path d=&quot;M0 7.03781H3.12027L3.47086 9.01536C4.34734 7.83643 5.57441 6.84766 7.67797 6.84766C9.78152 6.84766 11.1839 7.57022 12.0604 9.54778C13.007 7.87446 14.6547 6.84766 16.9336 6.84766C19.2124 6.84766 22.2626 8.71112 22.2626 13.655V22.592H18.7216V13.8452C18.7216 11.3732 17.8101 10.0422 16.0221 10.0422C14.234 10.0422 12.9368 11.5253 12.9368 14.1114V22.592H9.39587V13.8452C9.39587 11.3732 8.48433 10.0422 6.66125 10.0422C4.83817 10.0422 3.6111 11.6014 3.6111 14.1874V22.592H0V7.03781Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M23.9104 2.89335C23.9104 1.67639 24.7869 0.763672 25.9088 0.763672C27.0307 0.763672 27.9072 1.67639 27.9072 2.89335C27.9072 4.1103 27.0307 5.02302 25.9088 5.02302C24.7869 5.02302 23.9104 4.1103 23.9104 2.89335ZM27.6968 7.03861V22.5928H24.1558V7.03861H27.6968Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M29.1693 17.4589H32.5701C32.6753 18.9041 33.8673 19.9689 35.9007 19.9689C37.9341 19.9689 38.7405 19.2844 38.7405 18.1054C38.7405 16.9265 37.5835 16.5462 35.3398 16.242C32.0091 15.7856 29.4148 14.987 29.4148 11.7925C29.4148 8.59795 31.8689 6.81055 35.4449 6.81055C39.021 6.81055 41.7556 8.63598 41.9659 11.8305H38.5301C38.3899 10.4994 37.233 9.66279 35.5501 9.66279C33.8673 9.66279 32.8506 10.3473 32.8506 11.4502C32.8506 12.5531 34.1477 12.8953 36.2162 13.1615C39.4767 13.5418 42.2114 14.3405 42.2114 17.8392C42.2114 21.338 39.5819 22.8211 35.8656 22.8211C32.1494 22.8211 29.2745 20.8436 29.1343 17.497L29.1693 17.4589Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M42.8424 17.4589H46.2432C46.3484 18.9041 47.5404 19.9689 49.5738 19.9689C51.6072 19.9689 52.4136 19.2844 52.4136 18.1054C52.4136 16.9265 51.2566 16.5462 49.0129 16.242C45.6822 15.7856 43.0878 14.987 43.0878 11.7925C43.0878 8.59795 45.542 6.81055 49.118 6.81055C52.6941 6.81055 55.4287 8.63598 55.639 11.8305H52.2032C52.063 10.4994 50.906 9.66279 49.2232 9.66279C47.5404 9.66279 46.5236 10.3473 46.5236 11.4502C46.5236 12.5531 47.8208 12.8953 49.8893 13.1615C53.1498 13.5418 55.8845 14.3405 55.8845 17.8392C55.8845 21.338 53.255 22.8211 49.5387 22.8211C45.8225 22.8211 42.9476 20.8436 42.8074 17.497L42.8424 17.4589Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M57.1816 2.89335C57.1816 1.67639 58.0581 0.763672 59.18 0.763672C60.3019 0.763672 61.1784 1.67639 61.1784 2.89335C61.1784 4.1103 60.3019 5.02302 59.18 5.02302C58.0581 5.02302 57.1816 4.1103 57.1816 2.89335ZM60.968 7.03861V22.5928H57.4271V7.03861H60.968Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M62.5457 14.873C62.5457 10.0812 65.5257 6.88672 70.0133 6.88672C74.5008 6.88672 77.4809 10.0812 77.4809 14.873C77.4809 19.6648 74.5008 22.8213 70.0133 22.8213C65.5257 22.8213 62.5457 19.6267 62.5457 14.873ZM73.8347 14.873C73.8347 12.0588 72.3622 10.0812 70.0133 10.0812C67.6643 10.0812 66.1918 12.0588 66.1918 14.873C66.1918 17.6872 67.6643 19.6267 70.0133 19.6267C72.3622 19.6267 73.8347 17.6492 73.8347 14.873Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M82.1788 7.03781L82.5294 9.01536C83.4409 7.7984 84.8083 6.84766 87.052 6.84766C89.2958 6.84766 92.8018 8.67309 92.8018 13.9593V22.592H89.2608V14.3015C89.2608 11.5253 88.209 10.0422 86.1405 10.0422C84.072 10.0422 82.6696 11.7535 82.6696 14.6438V22.554H79.1287V7.03781H82.2489H82.1788Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M104.547 1.37207V9.13017C105.493 7.83716 106.931 6.84838 109.034 6.84838C112.891 6.84838 115.73 9.81471 115.73 14.7966C115.73 19.7786 112.891 22.7829 108.999 22.7829C105.108 22.7829 105.388 21.7941 104.476 20.4631L104.126 22.6308H101.006V1.37207H104.547ZM104.512 14.8347C104.512 17.6489 105.984 19.6264 108.298 19.6264C110.612 19.6264 112.119 17.6869 112.119 14.8727C112.119 12.0585 110.612 10.0809 108.298 10.0809C105.984 10.0809 104.512 12.0204 104.512 14.8347Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M136.38 7.03809H140.447L143.603 11.9439L146.863 7.03809H150.72L145.671 14.6441L151 22.5923H146.933L143.427 17.3822L139.956 22.5923H136.1L141.464 14.6441L136.38 7.03809Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M124.706 3.84365V0.458984H117.553V26.5855H124.706V23.2009H120.674V3.84365H124.706Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M127.335 3.84365V0.458984H134.487V26.5855H127.335V23.2009H131.367V3.84365H127.335Z&quot; fill=&quot;white&quot;></path> </svg>",
            }}
          />
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
