import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import catImg from "../../assets/terms/cat-mob.png";
import bigDogImg from "../../assets/terms/big-dog-mob.png";
import littleDogImg from "../../assets/terms/little-dog-mob.png";

import catImgDes from "../../assets/terms/cat-des.png";
import bigDogImgDes from "../../assets/terms/big-dog-des.png";
import littleDogImgDes from "../../assets/terms/little-dog-des.png";

const animalsList = [
  {
    title: "Лише власник",
    description: "Собаку чи кота віддаємо лише в руки майбутньому власнику",
    images: {
      mob: littleDogImg,
      md: "",
      lg: littleDogImgDes,
    },
  },
  {
    title: "Тварина для сім'ї",
    description:
      "Тваринки не для утримання на ланцюгу, охорони підприєства чи самовигулу",
    images: { mob: catImg, md: "", lg: catImgDes },
  },
  {
    title: "Відповідальність",
    description:
      "Не забирайте тварину з притулку, якщо не готові про неї піклуватись",
    images: { mob: bigDogImg, md: "", lg: bigDogImgDes },
  },
];

const SectionTerms = () => {
  const breakpoint = useBreakpoint();

  return (
    <Box
      as="section"
      id="terms"
      pb={{ base: "40px", sm: "60px", md: "100px", lg: "185px" }}
    >
      <Container>
        <Heading variant="sectionHeading" mb={{ base: 3, md: 16 }}>
          Наші умови
        </Heading>

        <List
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 2 }}
          justifyContent={{ md: "space-between" }}
        >
          {animalsList.map((animal, index) => (
            <ListItem
              key={index}
              display="flex"
              flexDirection={
                breakpoint !== "mobile" && index !== 1
                  ? "column"
                  : "column-reverse"
              }
              alignItems={{ base: "center" }}
              gap={3}
              w={{ base: "327px", md: "306px", lg: "425px" }}
              justifyContent={{ md: "space-between" }}
            >
              <Box>
                <Heading as="h3" variant="subTitle" mb={{ base: 3, md: 4 }}>
                  {animal.title}
                </Heading>
                <Text
                  fontSize={{ md: "20px", lg: "24px" }}
                  fontWeight={{ md: 400, lg: 700 }}
                >
                  {animal.description}
                </Text>
              </Box>

              <Image
                src={
                  breakpoint === "desktop"
                    ? animal.images.lg
                    : animal.images.mob
                }
                alt="зображення тваринки"
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default SectionTerms;
