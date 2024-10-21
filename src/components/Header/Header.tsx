import { Button, Container, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

import { Logo } from "../Logo";
import { MobMenu } from "../MobMenu/MobMenu";
import { BurgerBtnIcon } from "../../assets/icons/burgerBtn";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { NavList } from "../NavList/NavList";
import { navHeaderDesktop } from "../../data/navList";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const breakpoint = useBreakpoint();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

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

  const getHelpButton = () => (
    <Button as="a" href="#help" variant="help">
      {t("header.help")}
    </Button>
  );

  const getBurgerButton = () =>
    breakpoint !== "desktop" && (
      <Button onClick={onOpen} bgColor="transparent">
        <BurgerBtnIcon />
      </Button>
    );

  return (
    <Container
      as="header"
      id="header"
      display="flex"
      alignItems="center"
      gap={[2, 2, 6]}
      h={["100px", "124px"]}
    >
      <Logo isDesktop={breakpoint === "desktop"} />
      {getNavList()}
      {breakpoint !== "mobile" && <SelectLanguage />}
      {getHelpButton()}
      {getBurgerButton()}
      <MobMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Container>
  );
};

export default Header;
