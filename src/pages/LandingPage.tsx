import React, { lazy, Suspense } from "react";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { SuspenseLoader } from "../components/Loader/SuspenseLoader";

const SectionHero = lazy(() => import("../components/Sections/SectionHero"));
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

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<SuspenseLoader />}>
          <SectionHero />
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
