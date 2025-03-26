
import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import FAQAccordion from "@/components/faq/FAQAccordion";
import "@/lib/variables.css";

const FAQ: React.FC = () => {
  return (
    <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
      <Header />
      <main className="px-[120px] py-16 max-md:px-10 max-sm:px-5">
        <h1 className="text-6xl font-bold text-center mb-16 text-[color:var(--purple)]">FAQs</h1>
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
