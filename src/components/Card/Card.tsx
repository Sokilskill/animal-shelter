import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { Animal } from "../../types";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import { useTranslation } from "react-i18next";

interface CardProps {
  item: Animal;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const { t } = useTranslation();

  const { imgLg, imgMob, translationKey, age, description } = item;
  const getImageSrc = useBreakpointValue({
    base: imgMob,
    md: imgLg,
    lg: imgLg,
  });

  const formatAge = () => {
    let ageText = "";

    if (age.year) {
      ageText = `${age.year} ${
        Number(age.year) > 1 ? t("card.years") : t("card.year")
      } `;
    }
    if (age.month) {
      ageText += `${age.month} ${t("card.months")}`;
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
        <CardInfo
          name={t(`animals.${translationKey}.name`)}
          ageText={formatAge()}
        />

        <CardButton />
      </Flex>
    </>
  );
};
