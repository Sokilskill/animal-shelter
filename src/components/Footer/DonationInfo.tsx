import { Box, Flex, Text } from "@chakra-ui/react";

const DonationInfo: React.FC = () => {
  return (
    <>
      <Text>Допомогти матеріально:</Text>
      <Text>ГО “ХАТИНА”</Text>
      <Text text-wrap="nowrap">
        ЄДРПОУ:
        <Box as="strong" fontWeight={{ sm: 500, md: 600 }}>
          123456789
        </Box>
      </Text>
      <Text text-wrap="nowrap">Карта Приватбанку</Text>
      <Text fontWeight={{ sm: 600 }}>4141 2929 4646 1111</Text>
      <Text>Прокопів Петро Павлович</Text>
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
