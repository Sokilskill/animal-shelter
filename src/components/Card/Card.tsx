import { Flex } from "@chakra-ui/react";

import { Animal } from "../../types";
import { CardImage } from "./CardImage";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";

interface CardProps {
  item: Animal;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const breakpoint = useBreakpoint();

  const { imgLg, imgMob, name, age, description } = item;
  const getImageSrc = breakpoint === "laptop" ? imgLg : imgMob;

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

  return (
    <>
      <CardImage imgSrc={getImageSrc} altText={`Зображення ${description}`} />

      <Flex py="14px" justifyContent="space-between" alignItems="center">
        <CardInfo name={name} ageText={formatAge()} />

        <CardButton />
      </Flex>
    </>
  );
};
