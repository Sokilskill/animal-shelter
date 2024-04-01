import {
  Box,
  Heading,
  useMediaQuery,
  Image,
  Show,
  Text,
  Flex,
} from "@chakra-ui/react";

import { Animal } from "../types";
import { ArrowIcon } from "../assets/icons/arrow";
interface CardProps {
  item: Animal;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { img, imgMob, name, age, description } = item;

  // Визначення ширини екрану
  const [isLargerThanLg] = useMediaQuery("(min-width: 1440px)"); // 1440px
  const [isSmallerThanLg] = useMediaQuery("(max-width: 89,9em)"); // 1339px

  // визначення, відображення зображення мобільного чи десктопного
  const getImageSrc = () => {
    if (isLargerThanLg) {
      return img;
    } else if (isSmallerThanLg) {
      return imgMob;
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
    <Box w="223px">
      <Show below="lg">
        <Image
          src={getImageSrc()}
          alt={`Зображення ${description}`}
          h={isLargerThanLg ? "350px" : "260px"}
        />
      </Show>

      <Flex py="14px" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading
            color="custom.darkBlue"
            as="h4"
            fontWeight="400"
            fontSize="32px"
            lineHeight="1.6"
            mb="8px"
          >
            {name}
          </Heading>
          <Text>Вік {formatAge()}</Text>
        </Box>
        <ArrowIcon boxSize="44px" />
      </Flex>
    </Box>
  );
};
