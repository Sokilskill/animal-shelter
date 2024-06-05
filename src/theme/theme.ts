import { extendTheme } from "@chakra-ui/react";
import { Container, Link, Heading, Button, Text } from "./component";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },

  breakpoints: {
    base: "0em",
    sm: "23.4em",
    md: "64em",
    xl: "90em",
    lg: "90em",
  },

  styles: {
    global: {
      "@media (prefers-reduced-motion: no-preference)": {
        ":root": {
          scrollBehavior: "smooth",
        },
      },
      a: {
        textDecoration: "none",
      },

      body: {
        bg: "white", // Фоновий колір для body
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
      red: "#EF3959",
      darkBlue: "#202053",
      blackTypography: "#404040",
      borderGradient: `
      linear-gradient(to right, white, white),
  linear-gradient(94deg, #4a86ff, #f5f5f5 , #ef3959)
  `,
    },
  },

  components: {
    Container,
    Button,
    Link,
    Heading,
    Text,
    Select: {
      defaultProps: {
        variants: "",
      },
    },
  },
});

export default theme;
