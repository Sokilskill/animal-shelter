import {
  Box,
  Button,
  Container,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";

import { LogoMob, LogoTabletDesk } from "./Logo";
import { MobMenu } from "./MobMenu/MobMenu";
import { BurgerBtnIcon } from "../assets/icons/burgerBtn";
import { SelectLanguage } from "./SelectLanguage/SelectLanguage";

export const Header: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box as="header">
      <Container
        display="flex"
        alignItems={"center"}
        gap={[2, 2, 6]}
        h={["100px ", "124px"]}
      >
        {isMobile ? <LogoMob /> : <LogoTabletDesk />}
        <Box display={{ base: "none", md: "block" }}>
          <SelectLanguage />
        </Box>
        <Button
          as="a"
          href="#help"
          fontSize={{ base: "15px", sm: "20px", md: "24px" }}
          fontWeight={[400, 400, 600]}
          maxW={[40, 40, "unset"]}
          px={"25px"}
          py={"15px"}
          borderWidth={["2px", "2px", "4px", "4px"]}
          borderRadius="15px"
          variant="primary"
        >
          Допомогти
        </Button>

        <Button onClick={onOpen} bgColor="transparent">
          <BurgerBtnIcon />
        </Button>

        <MobMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </Container>
    </Box>
  );
};
