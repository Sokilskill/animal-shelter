import { Box, Container, Heading, Image } from "@chakra-ui/react";
import map from "../assets/Map.png";

export const SectionLocation = () => {
  return (
    <Box as="section" pb="40px">
      <Container>
        <Heading variant="sectionHeading" mb={6}>
          Локація
        </Heading>
      </Container>

      {/* гугл мап  з вказівником адреси */}
      <Image src={map} alt="map" width="375px" h="160px" mx="auto" />
    </Box>
  );
};
