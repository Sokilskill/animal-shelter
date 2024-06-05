import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import heroImgMob from "../../assets/hero/hero-image1-mob.png";
import heroImgLaptop from "../../assets/hero/hero-image1-laptop.png";
import heroImgDesktop from "../../assets/hero/hero-image1-desktop.png";
import decor from "../../assets/hero/decor-mob.png";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const SectionHero: React.FC = () => {
  const breakpoint = useBreakpoint();

  let heroImg = heroImgMob;

  if (breakpoint === "laptop") {
    heroImg = heroImgLaptop;
  } else if (breakpoint === "desktop") {
    heroImg = heroImgDesktop;
  } else {
    heroImg = heroImgMob;
  }

  const HeroDescription = () => {
    return (
      <Text
        fontSize={["16px", "20px", "24px", "30px"]}
        fontWeight={{ base: "medium", lg: "bold" }}
        color="custom.blackTypography"
      >
        Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий дім
        та дбайливий господар
      </Text>
    );
  };

  const ChooseButton = () => {
    return (
      <Button
        as="a"
        href="#choose"
        w={{ base: "327px", md: "328px" }}
        h={{ base: "80px", md: "102px" }}
        px={20}
        py={4}
        mt={{ md: 20 }}
        borderWidth={["4px", "4px", "5px", "5px"]}
        variant={"primary"}
      >
        Обрати
      </Button>
    );
  };
  const ChooseImage = () => {
    return (
      <Flex
        alignItems="center"
        justify="center"
        w={{ base: "100%", sm: "375px", md: "480px", lg: "615px" }}
        my={6}
        bgImage={`url(${decor})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize={{
          base: "100% auto",
          sm: "346px 348px",
          md: "100% 515px",
          lg: "100% 680px",
        }}
      >
        <Image
          src={heroImg}
          w={["100%", "286px", "438px", "538px"]}
          h={["auto", "370px", "553px", "680px"]}
        />
      </Flex>
    );
  };

  return (
    <Container
      as="section"
      id="hero"
      pb={["50px", "50px", "92px", "120px"]}
      pt={{ md: "42px" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack
        alignItems="flex-start"
        spacing={"unset"}
        w={{ md: "480px", lg: "620px" }}
        px={[0, "0.625rem", "unset"]}
      >
        <Heading
          as="h1"
          fontSize={["30px", "36px", "52px", "64px"]}
          fontWeight={{ md: "extrabold", lg: "bold" }}
          lineHeight={{ md: 1.3 }}
          mb={[4, 6, 10]}
        >
          Цим оченятам дуже потрібні любов і турбота
        </Heading>

        <HeroDescription />

        {breakpoint !== "mobile" && <ChooseButton />}
      </VStack>

      <ChooseImage />

      {breakpoint === "mobile" && <ChooseButton />}
    </Container>
  );
};

export default SectionHero;
