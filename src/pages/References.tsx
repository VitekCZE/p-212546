
import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ClientReferences from "@/components/references/ClientReferences";
import "@/lib/variables.css";

const References: React.FC = () => {
  return (
    <div className="max-w-[1440px] box-border w-full overflow-hidden mx-auto my-0 p-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-[color:var(--black)] text-[color:var(--white)]">
      <Header />
      <main>
        <h1 className="text-5xl font-bold text-center py-16">Spokojení klienti</h1>
        <ClientReferences />
      </main>
      <Footer />
    </div>
  );
};

export default References;
