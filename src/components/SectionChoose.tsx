import { Box, Container, Heading, Text } from "@chakra-ui/react";
// import { ListOgAnimals } from "./ListOfAnimals/ListOgAnimals";

import listOfAnimals from "../data/animals.json";
import { Slider } from "./Slider/SliderAnimal";

export const SectionChoose = () => {
  return (
    <Box as="section" width="100%" pb="60px" mx="auto">
      <Container>
        <Heading variant="sectionHeading" mb={6}>
          Вибери собі вірного друга
        </Heading>

        <Text>Не купуй – прихисти, адже справжня дружба не продається!</Text>
      </Container>

      <Box w={{ base: "375px" }} pl="32px" mx="auto" my={6}>
        <Slider animals={listOfAnimals} />
        {/* <ListOgAnimals animals={listOfAnimals} /> */}
      </Box>

      <Container>
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
          Показати більше
        </Box>
      </Container>
    </Box>
  );
};
