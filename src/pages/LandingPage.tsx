import React, { lazy, Suspense } from "react";
import Header from "../components/Header/Header";
import { SuspenseLoader } from "../components/Loader/SuspenseLoader";
import SectionHero from "../components/Sections/SectionHero";

const SectionAbout = lazy(() => import("../components/Sections/SectionAbout"));
const SectionChoose = lazy(
  () => import("../components/Sections/SectionChoose")
);
const SectionTerms = lazy(() => import("../components/Sections/SectionTerms"));
const SectionLocation = lazy(
  () => import("../components/Sections/SectionLocation")
);
const SectionContacts = lazy(
  () => import("../components/Sections/SectionContacts/SectionContacts")
);
const SectionHelp = lazy(() => import("../components/Sections/SectionHelp"));
const Footer = lazy(() => import("../components/Footer/Footer"));

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <Suspense fallback={<SuspenseLoader />}>
          <SectionAbout />
          <SectionChoose />
          <SectionTerms />
          <SectionLocation />
          <SectionContacts />
          <SectionHelp />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
