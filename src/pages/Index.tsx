import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProductTypes from "@/components/landing/ProductTypes";
import References from "@/components/landing/References";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import "@/lib/variables.css";

const Index: React.FC = () => {
  return (
    <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProductTypes />
        <References />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
