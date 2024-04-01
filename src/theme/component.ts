export const Container = {
  baseStyle: {
    margin: "0 auto",
    "@media screen and (min-width: 1440px)": {
      maxWidth: "1440px",
      paddingX: "40px",
      outline: "1px solid yellow",
    },
    "@media screen and (min-width: 768px)": {
      maxWidth: "1024px",
      paddingX: "32px",
      outline: "1px solid green",
    },
    "@media screen and (max-width: 767px)": {
      maxWidth: "375px",
      minWidth: "320px",
      paddingX: "24px",
    },
  },
};

export const Link = {
  baseStyle: {
    display: "block",
    fontWeight: "normal",
    _hover: {
      textDecoration: "none",
    },
  },
};

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
        color: " red",
      },
    },
  },
  defaultProps: {
    baseStyle: "",
    size: "",
  },
};
