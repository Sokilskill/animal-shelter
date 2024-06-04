import { VStack, Text } from "@chakra-ui/react";
import { ListSocialIcons } from "./SocialIcons";

export const SocialSection: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <VStack
      gap={{ base: 4, md: 8 }}
      w={{ base: "212px", md: "221px", lg: "212px" }}
      mr={{ lg: "132px" }}
    >
      {children}
      <Text
        fontSize={{ base: "18px" }}
        fontWeight={{ base: 400, md: 500, lg: 400 }}
      >
        Приєднутесь до нас в соціальних мережах
      </Text>
      <ListSocialIcons />
    </VStack>
  );
};
