import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import heroImgMob from "../assets/hero/hero-image1-mob.png";
import heroImgLaptop from "../assets/hero/hero-image1-laptop.png";
import decor from "../assets/hero/decor-mob.png";

export const SectionHero: React.FC = () => {
  const breakpoint = useBreakpointValue({
    md: "laptop",
    lg: "desktop",
  });

  let heroImg = heroImgMob;

  if (breakpoint === "laptop") {
    heroImg = heroImgLaptop;
  } else if (breakpoint === "desktop") {
    heroImg = heroImgLaptop;
  } else {
    heroImg = heroImgMob;
  }

  return (
    <Box
      as="section"
      id="hero"
      pb={["50px", "50px", "92px", "120px"]}
      pt={{ md: "42px" }}
    >
      <Container
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

          <Text
            fontSize={["16px", "20px", "24px", "30px"]}
            fontWeight={{ base: "medium", lg: "bold" }}
            color="custom.blackTypography"
          >
            Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий
            дім та дбайливий господар
          </Text>

          <Button
            display={{ base: "none", md: "inline-block" }}
            as="a"
            href="#choose"
            fontSize="36px"
            px={20}
            py={4}
            mt={20}
            borderWidth={["4px", "4px", "5px", "5px"]}
            variant={"primary"}
          >
            Обрати
          </Button>
        </VStack>

        <Flex
          alignItems="center"
          justify="center"
          w={{ base: "100%", sm: "375px", md: "480px" }}
          my={6}
          bgImage={`url(${decor})`}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={{ base: "100% auto", sm: "346px 348px", md: "100% 515px" }}
        >
          <Image
            src={heroImg}
            w={["100%", "286px", "438px"]}
            h={["auto", "370px", "553px"]}
          />
        </Flex>

        <Button
          display={{ md: "none" }}
          as="a"
          href="#choose"
          fontSize="32px"
          py="16px"
          w="100%"
          maxWidth="327px"
          borderWidth={["4px", "4px", "5px", "5px"]}
          variant={"primary"}
        >
          Обрати
        </Button>
      </Container>
    </Box>
  );
};
