import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Animal } from "../../types";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";

interface CardProps {
  item: Animal;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { imgLg, imgMob, name, age, description } = item;
  const getImageSrc = useBreakpointValue({
    base: imgMob,
    md: imgLg,
    lg: imgLg,
  });

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
      <Image
        src={getImageSrc}
        alt={description}
        h={{ base: "260px", lg: "350px" }}
        w={{ lg: "370px" }}
        borderTopRightRadius={"80px"}
      />
      <Flex py="14px" justifyContent="space-between" alignItems="center">
        <CardInfo name={name} ageText={formatAge()} />

        <CardButton />
      </Flex>
    </>
  );
};
