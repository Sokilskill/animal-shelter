export const Container = {
  baseStyle: {
    margin: "0 auto",
    "@media screen and (min-width: 1440px)": {
      maxWidth: "1440px",
      paddingX: "40px",
      outline: "1px solid yellow",
    },
    "@media screen and (max-width: 1439px)": {
      maxWidth: "1024px",
      paddingX: "32px",
      outline: "1px solid green",
    },
    "@media screen and (max-width: 767px)": {
      maxWidth: "375px",
      paddingX: "24px",
      outline: "1px solid blue",
    },
    variants: {
      small: {
        "@media screen and (max-width: 767px)": {
          maxWidth: "375px",
          paddingX: "20px",
          outline: "1px solid blue",
        },
      },
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
