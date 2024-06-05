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
      fontSize: { base: "28px", sm: "30px", md: "36px" },
      width: "160px",
      color: "white",
      bgColor: "custom.red",
      boxShadow: "0 0 40px 0 #EF395966",
      borderRadius: "25px 25px 25px 0",
      borderWidth: "none",
      borderColor: "transparent",
      transition: "all 200ms linear",

      _hover: {
        color: "custom.red",
        boxShadow: "none",
        bgColor: "transparent",
        borderWidth: { base: "4px" },
        borderColor: "custom.red",
      },
    },
    secondary: {
      width: { base: "327px", md: "442px" },
      height: { base: "80px", md: "102px" },
      color: "custom.red",
      fontSize: { base: "20px", sm: "32px", md: "36px" },
      fontWeight: { md: "600" },
      lineHeight: { base: 1.6, md: 1.2 },
      borderRadius: "25px 25px 25px 0",
      border: "3px solid transparent",

      background: `custom.borderGradient`,
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
      transition: "all 200ms linear",

      _hover: {
        borderWidth: { base: "6px", md: "7px" },
      },
    },
    help: {
      fontSize: { base: "15px", sm: "20px", md: "24px" },
      fontWeight: { base: 400, lg: 600 },
      width: { base: "160px", md: "213px" },
      height: { base: "60px", md: "76px" },
      color: "white",
      bgColor: "custom.red",
      boxShadow: "0 0 40px 0 #EF395966",
      borderRadius: { base: "15px", md: "25px" },
      borderWidth: "none",
      borderColor: "transparent",
      transition: "all 200ms linear",

      _hover: {
        color: "custom.red",
        boxShadow: "none",
        bgColor: "transparent",
        borderWidth: { base: "2px", md: "4px" },
        borderColor: "custom.red",
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
    fontWeight: "inherit",
    _hover: {
      textDecoration: "none",
    },
  },
  variants: {
    contactLink: {
      fontWeight: "500",
      fontSize: "16px",
      color: "red",

      "@media screen and (min-width: 1024px)": {
        fontSize: "24px",
      },

      "@media screen and (min-width: 1440px)": {
        fontWeight: "700",
        fontSize: "30px",
      },
    },
  },
};

// Heading
export const Heading = {
  baseStyle: {
    lineHeight: 1.3,
    fontWeight: "semibold",
    fontSize: "32px",
  },
  sizes: {},
  variants: {
    sectionHeading: {
      textAlign: "center",

      "@media screen and (min-width: 1024px)": {
        fontWeight: "extrabold",
        fontSize: "56px",
      },

      "@media screen and (min-width: 1440px)": {
        fontWeight: "bold",
      },
    },
    subTitle: {
      textAlign: "center",

      color: "custom.blue",
      "@media screen and (min-width: 1024px)": {
        textAlign: "start",
      },
      "@media screen and (min-width: 1440px)": {
        fontWeight: "bold",
        fontSize: "40px",
      },
    },
  },
  defaultProps: {
    baseStyle: "",
    size: "",
  },
};

export const Text = {
  baseStyle: {
    color: "custom.blackTypography",
  },
  variants: {
    contactText: {
      color: "custom.blue",
    },
  },
};
