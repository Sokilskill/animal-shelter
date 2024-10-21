import { Box, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface CardInfo {
  name: string;
  ageText: string;
}
export const CardInfo: React.FC<CardInfo> = ({ name, ageText }) => {
  const { t } = useTranslation();

  return (
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
        {t("card.age")} {ageText}
      </Text>
    </Box>
  );
};
