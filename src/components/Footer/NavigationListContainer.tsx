import { HStack } from "@chakra-ui/react";

export const NavigationListsContainer: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <HStack
      fontSize={{ base: "16px", lg: "20px" }}
      columnGap={{ base: "2px", lg: "16px" }}
      rowGap={{ base: "36px", lg: 4 }}
      justifyContent={{ base: "space-between" }}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      alignItems="flex-start"
      fontWeight={{ md: 500, lg: 400 }}
    >
      {children}
    </HStack>
  );
};
