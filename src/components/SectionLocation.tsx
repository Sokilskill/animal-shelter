import { Box, Container, Heading } from "@chakra-ui/react";

export const SectionLocation = () => {
  return (
    <Box as="section" pb={{ sm: 10, md: 20, lg: "120px" }}>
      <Container>
        <Heading variant="sectionHeading" mb={{ base: 6, md: "64px" }}>
          Локація
        </Heading>
      </Container>

      {/* гугл мап з вказівником адреси */}
      <Box
        mx="auto"
        w={{ base: "100%", lg: "1130px" }}
        h={{ base: "160px", md: "500px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.328916662951!2d24.714250827620496!3d48.91325626787462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1424d6470c9%3A0xe699dd76382dd64c!2z0LLRg9C70LjRhtGPINCj0LrRgNCw0ZfQvdGB0YzQutC-0Zcg0J_QtdGA0LXQvNC-0LPQuCwgMzQsINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LosINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzYwMDA!5e0!3m2!1suk!2sua!4v1716054952399!5m2!1suk!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};
