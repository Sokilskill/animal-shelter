// Container

export const Container = {
  baseStyle: {
    margin: "0 auto",
    "@media screen and (max-width: 1023px)": {
      maxWidth: "375px",
      minWidth: "300px",
      paddingX: "14px",
    },
    "@media screen and (min-width: 1024px)": {
      maxWidth: "1024px",
      paddingX: "32px",
    },
    "@media screen and (min-width: 1440px)": {
      maxWidth: "1440px",
      paddingX: "40px",
      outline: "1px solid yellow",
    },
  },
};

// Button
export const Button = {
  baseStyle: {
    textAlign: "center",
    fontWeight: "normal",
    lineHeight: 1.5,
    bgColor: "transparent",
  },
  variants: {
    primary: {
      color: "white",
      bgColor: "custom.red",
      boxShadow: " 0 0 40px 0 #EF395966",
      borderTopRadius: "25px",
      borderBottomEndRadius: "25px",
      borderWidth: "3px",
      borderColor: "transparent",
      transition:
        "background-color 0.4s, border-color 0.4s, color 0.4s, boxShadow 0.4s",
      _hover: {
        color: "custom.red",
        boxShadow: "unset",
        borderColor: "custom.red",
        bgColor: " transparent",
        textDecoration: "none",
      },
    },
    secondary: {
      position: "relative",
      overflow: "hidden",
      p: "15px",
      bgColor: "white",
      borderWidth: "3px",
      borderTopRadius: "25px",
      borderBottomEndRadius: "25px",
      transition: "background-color 0.4s, border-color 0.4s, color 0.4s",
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        borderRadius: "inherit",
        backgroundImage:
          "linear-gradient(to right, #4A86FF, #F5F5F5, #EF395966)",
      },
      _hover: {
        borderWidth: ["6px", "6px", "7px"],
      },
    },
  },
  defaultProps: {
    size: "",
    colorSchema: "",
  },
};

// Link
export const Link = {
  baseStyle: {
    display: "block",
    fontWeight: "normal",
    _hover: {
      textDecoration: "none",
    },
  },
};

// Heading
export const Heading = {
  baseStyle: {
    lineHeight: 1.2,
    fontWeight: "semibold",
    fontSize: "32px",
  },
  sizes: {},
  variants: {
    sectionHeading: {
      "@media screen and (max-width: 767px)": {
        textAlign: "center",
      },
      "@media screen and (min-width: 768px)": {
        // color: " red",
      },
    },
  },
  defaultProps: {
    baseStyle: "",
    size: "",
  },
};
