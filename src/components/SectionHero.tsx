import { Box, Container, Heading, Image, Link, Text } from "@chakra-ui/react";
import heroImg from "../assets/hero/hero-image1-mob.png";
import decor from "../assets/hero/decor-mob.png";
export const SectionHero: React.FC = () => {
  return (
    <Box as="section" id="hero" pb="50px">
      <Container>
        <Heading as="h1" fontSize="36px">
          Цим оченятам дуже потрібні любов і турбота
        </Heading>

        <Text fontSize="20px" color="custom.blackTypography">
          Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий дім
          та дбайливий господар
        </Text>
      </Container>

      <Box
        w="100%"
        mx="auto"
        px="14px"
        my={6}
        bgImage={`url(${decor})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="346px 348px"
      >
        <Image src={heroImg} w="286px" h="370px" mx="auto" />
      </Box>

      <Container>
        {/* створити кастомні стилі для цієї кнопки */}
        <Link
          fontSize="32px"
          py="16px"
          textAlign="center"
          // px="91px"
          w="100%"
          maxWidth="327px"
          color="white"
          bgColor="custom.red"
          borderTopRadius="25px"
          borderBottomEndRadius="25px"
          boxShadow=" 0 0 40px 0 #EF3959"
        >
          Обрати
        </Link>
      </Container>
    </Box>
  );
};
