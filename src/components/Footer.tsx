import { Box, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { LogoTabletDesk } from "./Logo";
import { ListSocialIcons } from "./SocialIcons";

interface ListNav {
  name: string;
  to: string;
}
const listGoodness: ListNav[] = [
  { name: "Вірні друзі", to: "#catalog" },
  { name: "Обрати друга", to: "#reviews" },
  { name: "Щасливчики", to: "#how-to-order" },
  { name: "Стати волонтером", to: "#contact" },
];

const listAbout: ListNav[] = [
  { name: "Про нас", to: "#contact" },
  { name: "Наші умови", to: "#contact" },
  { name: "Наша команда", to: "#contact" },
  { name: "Історія створення", to: "#contact" },
];
const listContactDetails: ListNav[] = [
  { name: "Локаця", to: "#contact" },
  { name: "Контакти", to: "#contact" },
  { name: "Інормація", to: "#contact" },
];

export const Footer: React.FC = () => {
  return (
    <Box as="footer" pt="40px" pb="25px">
      <Flex direction="column" gap="36px" px={{ base: "16px" }}>
        <Box w={{ base: "212px" }} mx="auto">
          <LogoTabletDesk />

          <Text my={4}>Приєднутесь до нас в соціальних мережах</Text>
          <ListSocialIcons />
        </Box>

        <HStack
          width="100%"
          columnGap="2px"
          rowGap={{ base: "36px" }}
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <NavList listItem={listGoodness} aria-label="Goodness" />
          <NavList listItem={listAbout} aria-label="About us" />
          <NavList listItem={listContactDetails} aria-label="Contact details" />

          <Flex
            direction="column"
            alignItems="flex-start"
            width="164px"
            aria-label="Help us"
          >
            <DonationIfo />
          </Flex>
        </HStack>
      </Flex>
      <Text textAlign="center" mt={20}>
        © 2024. Всі права захищено <b>reserved@hatyna.ua</b>
      </Text>
    </Box>
  );
};

//
// навігації футера
const NavList: React.FC<{ listItem: ListNav[]; "aria-label": string }> = ({
  listItem,
  "aria-label": ariaLabel,
}) => {
  return (
    <List
      display={"flex"}
      flexDirection="column"
      rowGap={2}
      w={{ base: "164px" }}
      aria-label={ariaLabel}
    >
      {listItem.map((item, index) => (
        <ListItem key={index} fontSize={{ base: "16px" }}>
          <RouterLink to={`/${item.to}`}>{item.name}</RouterLink>
        </ListItem>
      ))}
    </List>
  );
};

// інформація про Donate
const DonationIfo: React.FC = () => {
  return (
    <>
      <Text>Допомогти матеріально:</Text>
      <Text>ГО “ХАТИНА”</Text>
      <Text text-wrap="nowrap">
        ЄДРПОУ: <Box as="b">123456789</Box>
      </Text>
      <Text>Карта Приватбанку</Text>
      <Text as="b">4141 2929 4646 1111</Text>
      <Text>Прокопів Петро Павлович</Text>
    </>
  );
};
