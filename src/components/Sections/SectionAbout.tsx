import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import aboutImg from "../../assets/about/about-image2-mob.png";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import ExpandableTextContent from "../ExpandableTextContent/ExpandableTextContent";

const SectionAbout = () => {
  const breakpoint = useBreakpoint();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const aboutText = (
    <>
      В притулку весь час знаходиться 350 дорослих та 20 цуценят. В залежності
      від швидкості прилаштувань цифри змінюються.
      <br />
      Все почалося зі співчуття до масово викинутих тварин у місті, доля яких
      всім була байдужою. Власними зусиллями та особистими коштами волонтерів та
      небайдужих людей ми розпочали прилаштування та стерилізацію тварин для
      зменшення кількості безхатьків.
      <br />
      За роки нашої праці в рік стерилізується понад 400 тварин, а дім знаходять
      близько 240 безхатьків, деяких вдається прилаштувати навіть за кордон. Ми
      постійно покращуємо умови для проживання собак, проводимо ремонтні роботи
      вольєрів, облагороджуємо територію притулку. Проводимо масову вакцинацію
      собак, щоб уникнути спалаху захворювань.
      <br />
      <br />
      Наша робота вимагає дуже багато зусиль, як фізичних, так і фінансових.
      Допомога від міста полягає тільки у стерилізації та кастрації тварин, а
      всі інші витрати, включно із зарплатою, оплатою комунальних послуг,
      ремонтними роботами та лікуванням хворих тварин - це все на руках
      волонтерів та благодійних коштах.
      <br />
      <br />
      Ми щиро сподіваємося, що наша праця не марна і нас підтримають люди по
      всьому світу!
    </>
  );

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
            Про нас
          </Heading>

          {breakpoint === "mobile" && <ImageComponent />}

          <ExpandableTextContent text={aboutText} isExpanded={isExpanded} />

          <Button onClick={handleToggle} variant="secondary">
            {isExpanded ? "Менше" : "Детальніше"}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default SectionAbout;
