import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import imgMob from "../../../assets/contact/Image3.png";
import imgDes from "../../../assets/contact/image-des.png";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { AddressComponent } from "./AddressComponent";
import { useTranslation } from "react-i18next";

const SectionContacts = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();

  return (
    <Container
      as="section"
      id="contact"
      pb={{ base: "40px", sm: "60px", md: "100px", lg: "124px" }}
    >
      <Heading as="h2" variant="sectionHeading" mb={{ base: 6, md: "64px" }}>
        {t("address.title")}
      </Heading>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        alignItems={{ md: "center" }}
      >
        <Box>
          <Box
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ sm: "20px", md: "24px", lg: "30px" }}
            fontWeight={{ md: 500, lg: 700 }}
            mb="20px"
          >
            <Text>{t("address.have_a_question")}</Text>
            <Text>
              {breakpoint === "mobile"
                ? t("address.contact_text.mobile")
                : t("address.contact_text.desktop")}
            </Text>
          </Box>

          <AddressComponent />
        </Box>

        <Image
          src={breakpoint === "desktop" ? imgDes : imgMob}
          alt="img"
          w={{ sm: "320px", md: "468px", lg: "624px" }}
          h={{ sm: "205px", md: "280px", lg: "400px" }}
        />
      </Box>
    </Container>
  );
};

export default SectionContacts;
