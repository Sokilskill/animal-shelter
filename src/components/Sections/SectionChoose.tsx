import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import listOfAnimals from "../../data/animals.json";
import { Slider } from "../Slider/SliderAnimal";
import { Card } from "../Card/Card";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const SectionChoose = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();

  const numberOfCards = useBreakpointValue({ md: 8, lg: 6 });
  const visibleAnimals = listOfAnimals.slice(0, numberOfCards);

  const AnimalCardList = () => {
    return (
      <List
        display="flex"
        justifyContent={"center"}
        rowGap={{ md: "20px", lg: "80px" }}
        columnGap={{ md: "22px", lg: "125px" }}
        flexWrap="wrap"
        my={{ md: "64px" }}
      >
        {visibleAnimals.map(animal => (
          <ListItem
            key={animal.id}
            w={{ base: "200px", sm: "223px", md: "223px", lg: "370px" }}
            h={{ base: "200px", sm: "223px", md: "384px", lg: "470px" }}
          >
            <Card item={animal} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box
      as="section"
      id="catalog"
      width="100%"
      maxWidth={{ base: "320px", sm: "375px", md: "1024px", lg: "1440px" }}
      pb={{ base: "60px", lg: "64px" }}
      px={{ md: 8, lg: 10 }}
      mx={"auto"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Heading
        variant="sectionHeading"
        mb={6}
        w={{ base: "350px", md: "unset" }}
      >
        {t("section_choose.heading")}{" "}
      </Heading>

      <Text
        fontSize={["16px", "16px", "24px"]}
        fontWeight={{ base: 400, lg: 700 }}
        textAlign={"center"}
      >
        {t("section_choose.description")}{" "}
      </Text>

      {breakpoint === "mobile" ? (
        <Box
          w={{ base: "320px", sm: "375px" }}
          pl={{ base: "20px", sm: "32px" }}
          mx="auto"
          my={6}
        >
          <Slider animals={listOfAnimals} />
        </Box>
      ) : (
        <AnimalCardList />
      )}

      <Button type="button" mx={"auto"} variant="secondary">
        {t("section_choose.show_more")}{" "}
      </Button>
    </Box>
  );
};

export default SectionChoose;
