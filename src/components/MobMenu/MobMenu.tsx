import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavList } from "../NavList/NavList";
import { mobileNavigationList } from "../../data/navList";
import { CloseBtnIcon } from "../../assets/icons/burgerBtn";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { LogoMob, LogoTabletDesk } from "../Logo";

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
  const isMobile = useBreakpointValue({ base: true, md: false });

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
              {isMobile ? <LogoMob /> : <LogoTabletDesk />}
              <Box display={{ base: "none", md: "block" }}>
                <SelectLanguage />
              </Box>

              <Button as="a" href="#help" variant="help" onClick={onClose}>
                Допомогти
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
            <Box>
              <SelectLanguage fontSize="16px" mt="30px" />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
