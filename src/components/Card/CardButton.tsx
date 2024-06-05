import { Box } from "@chakra-ui/react";
import { ArrowIcon } from "../../assets/icons/arrow";

export const CardButton = () => {
  return (
    <Box
      as="button"
      w={{ base: "44px", md: "66px" }}
      h={{ base: "44px", md: "66px" }}
      borderRadius="50%"
      boxShadow="1px 2px 5px 0 #a4c2ff"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      color={"custom.blue"}
      _hover={{ color: "custom.red" }}
    >
      <ArrowIcon boxSize={{ base: "16px", md: "26px" }} />
    </Box>
  );
};
