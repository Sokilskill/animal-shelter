import { Box, Button, Container, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

import { LogoMob, LogoTabletDesk } from "../Logo";
import { MobMenu } from "../MobMenu/MobMenu";
import { BurgerBtnIcon } from "../../assets/icons/burgerBtn";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { NavList } from "../NavList/NavList";
import { navHeaderDesktop } from "../../data/navList";

const Header: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const getLogo = () =>
    breakpoint === "mobile" ? <LogoMob /> : <LogoTabletDesk />;

  const getNavList = () =>
    breakpoint === "desktop" && (
      <NavList
        listItem={navHeaderDesktop}
        aria-label="navigation"
        style={{
          flexDirection: "row",
          width: { lg: "715px" },
          justifyContent: "space-between",
          fontWeight: 400,
        }}
      />
    );

  const getSelectLanguage = () => breakpoint !== "mobile" && <SelectLanguage />;

  const getHelpButton = () => (
    <Button as="a" href="#help" variant="help">
      Допомогти
    </Button>
  );

  const getBurgerButton = () =>
    breakpoint !== "desktop" && (
      <Button onClick={onOpen} bgColor="transparent">
        <BurgerBtnIcon />
      </Button>
    );

  return (
    <Box as="header">
      <Container
        display="flex"
        alignItems="center"
        gap={[2, 2, 6]}
        h={["100px", "124px"]}
      >
        {getLogo()}
        {getNavList()}
        {getSelectLanguage()}
        {getHelpButton()}
        {getBurgerButton()}
        <MobMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Container>
    </Box>
  );
};

export default Header;
