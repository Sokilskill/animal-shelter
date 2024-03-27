import { extendTheme } from "@chakra-ui/react";
import { Container, Link } from "./component";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
  },

  breakpoints: {
    base: "0em",
    md: "65.5em",
    lg: "90em",
  },
  styles: {
    global: {
      body: {
        bg: "custom.blueBgGradient", // Фоновий колір для body
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
      bluePrimary: "#4A86FF",
      blueSecondary: "#4A86FF",
      blueBg: "#4A86FF",
      blueBgGradient:
        "radial-gradient( circle at center, #4A86FF, #F5F5F5, #EF3959)", // Градієнт з blue до red
      redPrimary: "#EF3959",
      red: "#EF3959",
      redBgGradient: "linear(to-r, #EF3959, #F5F5F5, #4A86FF)", // Градієнт з red до blue
      darkBlue: "#202053",
      blackTypography: "#404040",
    },
  },

  components: {
    Container,
    Link,
  },
});

export default theme;
