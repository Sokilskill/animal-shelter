import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { NavList } from "../NavList/NavList";
import { mobileNavigationList } from "../../data/navList";
import { CloseBtnIcon } from "../../assets/icons/burgerBtn";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { useTranslation } from "react-i18next";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface MobMenuProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}

export const MobMenu: React.FC<MobMenuProps> = ({
  btnRef,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const breakpoint = useBreakpoint();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxWidth={{ base: "100%", md: "624px" }} height="100%">
          <Box as="header">
            <Container
              display="flex"
              alignItems={"center"}
              gap={[2, 2, 0]}
              h={["100px ", "124px"]}
            >
              <Logo viewText={breakpoint !== "mobile"} />
              <Box display={{ base: "none", md: "block" }} mr={"20px"}>
                <SelectLanguage />
              </Box>

              <Button as="a" href="#help" variant="help" onClick={onClose}>
                {t("header.help")}
              </Button>
              <Button onClick={onClose} bgColor="transparent">
                <CloseBtnIcon />
              </Button>
            </Container>
          </Box>

          <DrawerBody
            mx="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <NavList
              onClick={onClose}
              listItem={mobileNavigationList}
              aria-label={"navigation"}
              style={{ alignItems: "center", gap: "30px" }}
            />
            <Box fontSize="16px" mt="30px">
              <SelectLanguage />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
