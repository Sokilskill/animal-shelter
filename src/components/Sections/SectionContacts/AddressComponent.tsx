import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const AddressComponent = () => {
  const { t } = useTranslation();

  const contactListItemStyle = {
    display: "flex",
    gap: { base: "15px", md: "20px" },
  };

  return (
    <Box
      as="address"
      textAlign="start"
      fontStyle="normal"
      mt={5}
      mb={6}
      fontWeight={{ sm: 500, lg: "700" }}
      fontSize={{ md: "24px", lg: "30px" }}
    >
      <List display="flex" flexDirection="column" gap={5}>
        <ListItem {...contactListItemStyle}>
          <Text
            variant="contactText"
            fontSize={{ sm: "20px", md: "24px", lg: "30px" }}
          >
            {t("address.address")}
          </Text>

          <Link
            href="https://maps.app.goo.gl/ASDzx7LiDPisj9DZ6"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("address.address_value")}
          </Link>
        </ListItem>

        <ListItem {...contactListItemStyle}>
          <Text variant="contactText">{t("address.phone")}</Text>
          <List>
            <ListItem>
              <Link href="tel:+380991234567">+38 (099) 123 45 67</Link>
            </ListItem>
            <ListItem>
              <Link href="tel:+380991234567">+38 (099) 123 45 67</Link>
            </ListItem>
          </List>
        </ListItem>

        <ListItem {...contactListItemStyle}>
          <Text variant="contactText">{t("address.email")}</Text>
          <Link href="mailto:hatyna@gmail.com">hatyna@gmail.com</Link>
        </ListItem>
      </List>
    </Box>
  );
};
