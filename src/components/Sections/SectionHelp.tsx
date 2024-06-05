import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import bgImgMobile from "../../assets/help/Rectangle.png";
import bgImgLaptop from "../../assets/help/rectangle-laptop.png";
import bgImgDesk from "../../assets/help/rectangle-desk.png";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const HelpText: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <Text
    textAlign="center"
    fontSize={{ md: "24px" }}
    fontWeight={{ md: 500, lg: 700 }}
  >
    {isMobile ? (
      <>
        Перейдіть за посиланням
        <br />
        та заповніть форму
        <br />
        Ми з вами обов’язково звяжемось
      </>
    ) : (
      <>
        Перейдіть за посиланням та заповніть форму
        <br />
        Ми з вами обов’язково звяжемось
      </>
    )}
  </Text>
);

const SectionHelp = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "mobile";

  const bgImg = () => {
    if (breakpoint === "laptop") {
      return bgImgLaptop;
    } else if (breakpoint === "desktop") {
      return bgImgDesk;
    } else {
      return bgImgMobile;
    }
  };

  return (
    <Container
      as="section"
      id="help"
      pb={{ base: "30px", sm: "44px", md: "120", lg: "56px" }}
    >
      <Heading variant="sectionHeading" mb={{ base: "24px", md: "64px" }}>
        Як допомогти
      </Heading>

      <Box
        pt={{ base: "43px", md: "60px" }}
        pb={{ base: "53px", md: "77px" }}
        mx="auto"
        bgImage={`url(${bgImg()})`}
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
          <Text
            fontSize={{ base: "30px", md: "40px" }}
            fontWeight={{ base: 500, md: 700 }}
            textAlign="center"
            color="custom.darkBlue"
          >
            Бажаєте допомогти притулку?
          </Text>

          <HelpText isMobile={isMobile} />

          <Button
            type="button"
            fontWeight={{ base: 500, md: 600 }}
            py={{ base: "16px", md: "30px" }}
            px={{ base: "20px", md: "40px" }}
            w={{ base: "300px", md: "442px" }}
            h={{ base: "80px", md: "102px" }}
            variant="primary"
          >
            Зв'яжіться з нами
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default SectionHelp;
