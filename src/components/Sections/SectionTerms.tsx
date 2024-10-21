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
import { useTranslation } from "react-i18next";

import catImg from "../../assets/terms/cat-mob.png";
import bigDogImg from "../../assets/terms/big-dog-mob.png";
import littleDogImg from "../../assets/terms/little-dog-mob.png";

import catImgDes from "../../assets/terms/cat-des.png";
import bigDogImgDes from "../../assets/terms/big-dog-des.png";
import littleDogImgDes from "../../assets/terms/little-dog-des.png";

const animalsList = [
  {
    images: {
      mob: littleDogImg,
      lg: littleDogImgDes,
    },
  },
  {
    images: {
      mob: catImg,
      lg: catImgDes,
    },
  },
  {
    images: {
      mob: bigDogImg,
      lg: bigDogImgDes,
    },
  },
];

const SectionTerms = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();

  return (
    <Box
      as="section"
      id="terms"
      pb={{ base: "40px", sm: "60px", md: "100px", lg: "185px" }}
    >
      <Container>
        <Heading variant="sectionHeading" mb={{ base: 3, md: 16 }}>
          {t("terms.heading")} {/* Переклад заголовку */}
        </Heading>

        <List
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 2 }}
          justifyContent={{ md: "space-between" }}
        >
          {animalsList.map((animal: any, index: number) => (
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
                  {t(`terms.items.${index}.title`)}
                </Heading>
                <Text
                  fontSize={{ md: "20px", lg: "24px" }}
                  fontWeight={{ md: 400, lg: 700 }}
                >
                  {t(`terms.items.${index}.description`)}
                </Text>
              </Box>

              <Image
                src={
                  breakpoint === "desktop"
                    ? animal.images.lg
                    : animal.images.mob
                }
                alt={t(`terms.items.${index}.title`)}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default SectionTerms;
