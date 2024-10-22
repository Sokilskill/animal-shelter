import { Box, Flex, Text } from "@chakra-ui/react";

import { Logo } from "../Logo";
import { NavList } from "../NavList/NavList";
import {
  listGoodness,
  listAbout,
  listContactDetails,
} from "../../data/navList";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { SocialSection } from "./SocialSection";
import { NavigationListsContainer } from "./NavigationListContainer";
import { HelpSection } from "./DonationInfo";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();

  const MobileDesktopFooter = () => (
    <Flex
      direction={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      justify={{ md: "space-between", lg: "center" }}
      gap={{ base: "36px", md: "unset" }}
      mb="44px"
    >
      <SocialSection>
        <Logo />
      </SocialSection>

      <NavigationListsContainer>
        <NavList listItem={listGoodness} aria-label="Goodness" />
        <NavList listItem={listAbout} aria-label="About us" />
        <NavList listItem={listContactDetails} aria-label="Contact details" />
        <HelpSection />
      </NavigationListsContainer>
    </Flex>
  );

  const TabletFooter = () => (
    <>
      <Flex
        flexDirection={{ md: "row" }}
        justifyContent="space-between"
        mb="44px"
      >
        <Logo style={{ mr: "0" }} />
        <SocialSection />
        <HelpSection />
      </Flex>

      <NavigationListsContainer>
        <NavList listItem={listAbout} aria-label="About us" />
        <NavList listItem={listGoodness} aria-label="Goodness" />
        <NavList listItem={listContactDetails} aria-label="Contact details" />
      </NavigationListsContainer>
    </>
  );

  return (
    <Box
      as="footer"
      maxW={{ base: "375px", md: "1240px", lg: "1440px" }}
      mx={"auto"}
      pt={{ base: "40px", md: "48px" }}
      pb={{ base: "25px", md: "50px" }}
      px={{ base: "16px", md: "32px", lg: "40px" }}
    >
      {breakpoint !== "laptop" ? <MobileDesktopFooter /> : <TabletFooter />}

      <Text textAlign="center" mt={20}>
        © 2024. {t("policy")} <b>reserved@hatyna.ua</b>
      </Text>
    </Box>
  );
};

export default Footer;
