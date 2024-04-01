import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import bgImg from "../assets/help/Rectangle.png";

export const SectionHelp = () => {
  return (
    <Box as="section" pb="44px">
      <Container>
        <Heading variant="sectionHeading" mb="24px">
          Як допомогти
        </Heading>
      </Container>
      <Box
        maxWidth="375px"
        pt="43px"
        pb="53px"
        mx="auto"
        bgImage={`url(${bgImg})`}
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="24px"
          px="14px"
        >
          <Text fontSize="30px" fontWeight="medium" textAlign="center">
            Бажаєте допомогти притулку?
          </Text>
          <Text textAlign="center">
            Перейдіть за посиланням
            <br /> та заповніть форму
            <br />
            Ми з вами обов’язково звяжемось
          </Text>

          {/* створити кастомні стилі для цієї кнопки */}
          <Box
            as="button"
            type="button"
            fontSize="32px"
            py="16px"
            textAlign="center"
            // px="91px"
            w="100%"
            maxWidth="327px"
            color="white"
            bgColor="custom.red"
            borderTopRadius="25px"
            borderBottomEndRadius="25px"
            boxShadow=" 0 0 40px 0 #EF3959"
          >
            Зв'яжіться з нами
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
