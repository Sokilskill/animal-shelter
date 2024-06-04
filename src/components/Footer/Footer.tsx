import { Box, Flex, Text } from "@chakra-ui/react";

import { LogoTabletDesk } from "../Logo";
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

export const Footer: React.FC = () => {
  const breakpoint = useBreakpoint();

  const MobileDesktopFooter = () => {
    return (
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justify={{ md: "space-between", lg: "center" }}
        gap={{ base: "36px", md: "unset" }}
        mb="44px"
      >
        <SocialSection>
          <LogoTabletDesk />
        </SocialSection>

        <NavigationListsContainer>
          <NavList listItem={listGoodness} aria-label="Goodness" />
          <NavList listItem={listAbout} aria-label="About us" />
          <NavList listItem={listContactDetails} aria-label="Contact details" />
          <HelpSection />
        </NavigationListsContainer>
      </Flex>
    );
  };

  const TabletFooter = () => {
    return (
      <>
        <Flex
          flexDirection={{ md: "row" }}
          justifyContent="space-between"
          mb="44px"
        >
          <LogoTabletDesk style={{ mr: "unset" }} />
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
  };

  return (
    <Box
      as="footer"
      maxW={{ base: "375px", md: "1240px", lg: "1440px" }}
      mx={"auto"}
      pt={{ base: "40px", md: "48px" }}
      pb={{ base: "25px", md: "50px" }}
      px={{ base: "16px", md: "32px", lg: "40px" }}
    >
      {breakpoint === "mobile" || breakpoint === "desktop" ? (
        <MobileDesktopFooter />
      ) : (
        <TabletFooter />
      )}

      <Text textAlign="center" mt={20}>
        © 2024. Всі права захищено <b>reserved@hatyna.ua</b>
      </Text>
    </Box>
  );
};
