import React from "react";
import { Header } from "../components/Header";
import { SectionHero } from "../components/SectionHero";
import { Footer } from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
