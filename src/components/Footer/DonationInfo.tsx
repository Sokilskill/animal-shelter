import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const DonationInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text>{t("donation.donate_financially")}:</Text>
      <Text>{t("donation.ngo_name")}</Text>
      <Text text-wrap="nowrap">
        {t("donation.edrpou")}:
        <Box as="strong" fontWeight={{ sm: 500, md: 600 }}>
          123456789
        </Box>
      </Text>
      <Text text-wrap="nowrap">{t("donation.privatbank_card")}</Text>
      <Text fontWeight={{ sm: 600 }}>4141 2929 4646 1111</Text>
      <Text>{t("donation.account_holder_name")}</Text>
    </>
  );
};

export const HelpSection = () => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      width={{ base: "164px", md: "230px", lg: "325px" }}
      aria-label="Help us"
      fontSize={{ base: "16px", lg: "20px" }}
      gap={2}
    >
      <DonationInfo />
    </Flex>
  );
};
