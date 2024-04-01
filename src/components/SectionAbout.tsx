import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import aboutImg from "../assets/about/about-image2-mob.png";

export const SectionAbout = () => {
  return (
    <Box as="section" pb="73px">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={"24px"}
      >
        <Heading as="h2" variant="sectionHeading">
          Про нас
        </Heading>
        <Image src={aboutImg} alt="зображення пса в лісі" />
        <Text height="220px" overflow="hidden">
          В притулку весь час знаходиться 350 дорослих та 20 цуценят. В
          залежності від швидкості прилаштувань цифри змінюються. Все почалося
          зі співчуття до масово викинутих тварин у місті, доля яких всім була
          байдужою. Власними зусиллями та особистими коштами волонтерів та
          небайдужих людей ми розпочали прилаштування та стерилізацію тварин для
          зменшення кількості безхатьків. За роки нашої праці в рік
          стерилізується понад 400 тварин, а дім знаходять близько 240
          безхатьків, деяких вдається прилаштувати навіть за кордон. Ми постійно
          покращуємо умови для проживання собак, проводимо ремонтні роботи
          вольєрів, облагороджуємо територію притулку. Проводимо масову
          вакцинацію собак, щоб уникнути спалаху захворювань. Наша робота
          вимагає дуже багато зусиль, як фізичних, так і фінансових. Допомога
          від міста полягає тільки у стерилізації та кастрації тварин, а всі
          інші витрати, включно із зарплатою, оплатою комунальних послуг,
          ремонтними роботами та лікуванням хворих тварин - це все на руках
          волонтерів та благодійних коштах. Ми щиро сподіваємося, що наша праця
          не марна і нас підтримають люди по всьому світу!
        </Text>

        {/* створити кастомні стилі для цієї кнопки */}

        <Box
          as="button"
          type="button"
          fontSize="32px"
          color="custom.red"
          p="15px"
          w="100%"
          maxW="327px"
          textAlign="center"
          bgColor="white"
          border="3px groove #007BFF"
          borderTopRadius="25px"
          borderBottomEndRadius="25px"
        >
          Детальніше
        </Box>
      </Container>
    </Box>
  );
};
