import {
  Box,
  Heading,
  useMediaQuery,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";

import { Animal } from "../types";
import { ArrowIcon } from "../assets/icons/arrow";
interface CardProps {
  item: Animal;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { imgLg, imgMob, name, age, description } = item;

  // Визначення ширини екрану
  const [isLargerThanLg] = useMediaQuery("(min-width: 1024px)");

  // визначення, відображення зображення мобільного чи десктопного
  const getImageSrc = () => {
    if (isLargerThanLg) {
      return imgLg;
    } else {
      return imgMob; // за замовчуванням використовуємо мобільну версію
    }
  };

  // форматування відображення віку
  const formatAge = () => {
    let ageText = "";

    if (age.year) {
      ageText = `${age.year} ${Number(age.year) > 1 ? "роки" : "рік"} `;
    }
    if (age.month) {
      ageText += `${age.month} місяців`;
    }
    return ageText;
  };

  //
  //
  return (
    <>
      <Image
        src={getImageSrc()}
        alt={`Зображення ${description}`}
        h={{ base: "260px", lg: "350px" }}
      />

      <Flex py="14px" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading
            as="h4"
            fontWeight={{ base: 400, lg: 700 }}
            fontSize={{ base: "32px", lg: "40px" }}
            lineHeight="1.6"
            mb="8px"
          >
            {name}
          </Heading>

          <Text fontSize={{ lg: "24px" }} fontWeight={{ lg: 700 }}>
            Вік {formatAge()}
          </Text>
        </Box>
        <ArrowIcon boxSize={{ base: "44px", lg: "66px" }} />
      </Flex>
    </>
  );
};
