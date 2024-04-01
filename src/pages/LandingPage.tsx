import React from "react";
import { Header } from "../components/Header";
import { SectionHero } from "../components/SectionHero";
import { Footer } from "../components/Footer";
import { SectionAbout } from "../components/SectionAbout";
import { SectionChoose } from "../components/SectionChoose";
import { SectionTerms } from "../components/SectionTerms";
import { SectionLocation } from "../components/SectionLocation";
import { SectionContacts } from "../components/SectionContacts";
import { SectionHelp } from "../components/SectionHelp";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionChoose />
        <SectionTerms />
        <SectionLocation />
        <SectionContacts />
        <SectionHelp />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
