import { extendTheme } from "@chakra-ui/react";
import { Container, Link, Heading, Button } from "./component";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },

  breakpoints: {
    base: "0em",
    sm: "23.4em",
    md: "64em",
    lg: "90em",
  },
  styles: {
    global: {
      body: {
        bg: "custom.blueRedGradient", // Фоновий колір для body
        color: "custom.darkBlue", // Колір тексту
        fontFamily: "body",
        fontWeight: "medium",
        lineHeight: "1.5",
      },
    },
  },
  colors: {
    custom: {
      white: "#F5F5F5",
      blue: "#4A86FF",
      blueRedGradient: "radial-gradient( 90deg, #4A86FF, #F5F5F5, #EF3959)",
      redPrimary: "#EF3959",
      red: "#EF3959",
      redBgGradient: "linear(to-r, #EF3959, #F5F5F5, #4A86FF)",
      darkBlue: "#202053",
      blackTypography: "#404040",
    },
  },

  components: {
    Container,
    Button,
    Link,
    Heading,
    Select: {
      defaultProps: {
        variants: "",
      },
    },
  },
});

export default theme;
