import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../../assets/about/about-image2-mob.png";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import ExpandableTextContent from "../ExpandableTextContent/ExpandableTextContent";

const SectionAbout = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const aboutText = t("about_section.content"); // Отримуємо перекладений текст

  const ImageComponent = () => {
    return (
      <Image
        src={aboutImg}
        alt="зображення пса в лісі"
        w={{ md: "452px" }}
        height={{ md: "488px" }}
      />
    );
  };

  return (
    <Box
      as="section"
      id="about-us"
      pb={{ base: "50px", sm: "60px", md: "100px" }}
    >
      <Container
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ md: "center" }}
        gap="24px"
      >
        {breakpoint !== "mobile" && <ImageComponent />}

        <VStack spacing={{ base: 6, md: 10 }}>
          <Heading as="h2" variant="sectionHeading">
            {t("about_section.title")} {/* Переклад заголовку */}
          </Heading>

          {breakpoint === "mobile" && <ImageComponent />}

          <ExpandableTextContent text={aboutText} isExpanded={isExpanded} />

          <Button onClick={handleToggle} variant="secondary">
            {isExpanded
              ? t("about_section.read_less")
              : t("about_section.read_more")}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default SectionAbout;
