import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import img from "../assets/contact/Image3.png";

export const SectionContacts = () => {
  return (
    <Box as="section" pb="60px">
      <Container>
        <Heading as="h2" variant="sectionHeading" mb={6}>
          Наші контакти
        </Heading>

        <Text textAlign="center">У вас є питання?</Text>
        <Text textAlign="center">Зв'яжіться з нами:</Text>

        <Box
          as="address"
          textAlign="start"
          fontStyle="normal"
          display="flex"
          flexDirection="column"
          gap={5}
          mt={5}
          mb={6}
        >
          <Flex gap="15px">
            <Text color="custom.blue" fontSize="20px">
              Адреса
            </Text>
            <Text>cмт. Жук м. Івано-Франківська область</Text>
          </Flex>

          <Flex gap="15px">
            <Text fontWeight="medium" color="custom.blue">
              Телефон
            </Text>
            <List>
              <ListItem>
                <Link href="tel:+380991234567">+38 (099) 123 45 67</Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+380991234567">+38 (099) 123 45 67</Link>
              </ListItem>
            </List>
          </Flex>

          <Flex justifyContent="space-between">
            <Text fontWeight="medium" color="custom.blue">
              Електронна адреса
            </Text>
            <Link href="mailto:hatyna@gmail.com">hatyna@gmail.com</Link>
          </Flex>
        </Box>
        <Image src={img} alt="img" />
      </Container>
    </Box>
  );
};
