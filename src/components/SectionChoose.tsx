import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react'

import listOfAnimals from "../data/animals.json";
import { Slider } from "./Slider/SliderAnimal";
import { Card } from "./Card";


export const SectionChoose = () => {
const isMobile = useBreakpointValue({base:true, md:false})

  return (
    <Box as="section" width="100%" pb={{base:"60px", lg:"64px"}} mx={{base:"auto", lg:10}} display={'flex'} flexDirection={'column' } justifyContent={'center'}>
        <Heading  variant="sectionHeading" mb={6} textAlign={"center"}>
          Вибери собі вірного друга
        </Heading>

        <Text  fontSize={['16px', "16px", "24px"]} textAlign={"center"}>Не купуй – прихисти, адже справжня дружба не продається!</Text>

{isMobile ? 
      <Box   w={{ base: "375px" }} pl="32px" mx="auto" my={6}>
        <Slider animals={listOfAnimals} />
      </Box> :

<Box mx={10} my={{lg:"64px"}}>
<List display='flex' rowGap={20} columnGap="125px" flexWrap='wrap'>
            {listOfAnimals.map((animal) => (
              <ListItem key={animal.id}>
                <Card item={animal} />
              </ListItem>
            ))}
          </List>
</Box>}


        <Button
        mx={'auto'}
          type="button"
          fontSize={{base:"32px", lg: '36px'}}
          w={ "100%"}
          maxW={{base:"327px", lg:'442px'}}
          variant="secondary"
        >
          Показати більше
        </Button>
    </Box>
  );
};
