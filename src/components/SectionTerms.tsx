import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import catImg from "../assets/terms/cat-mob.png";
import bigDogImg from "../assets/terms/big-dog-mob.png";
import littleDogImg from "../assets/terms/little-dog-mob.png";

const animalsList = [
  {
    title: "Лише власник",
    description: "Собаку чи кота віддаємо лише в руки майбутньому власнику",
    image: littleDogImg,
  },
  {
    title: "Тварина для сім'ї",
    description:
      "Тваринки не для утримання на ланцюгу, охорони підприєства чи самовигулу",
    image: catImg,
  },
  {
    title: "Відповідальність",
    description:
      "Не забирайте тварину з притулку, якщо не готові про неї піклуватись",
    image: bigDogImg,
  },
];

export const SectionTerms = () => {
  return (
    <Box as="section" pb="60px">
      <Container>
        <Heading variant="sectionHeading" mb={3}>
          Наші умови
        </Heading>

        <List display="flex" flexDirection="column" gap={6}>
          {animalsList.map((animal, index) => (
            <ListItem
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Heading as="h3" color="custom.blue">
                {animal.title}
              </Heading>
              <Text>{animal.description}</Text>
              <Image src={animal.image} alt="зображення тваринки" />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
