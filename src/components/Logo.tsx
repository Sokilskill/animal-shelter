import { Image, Link, Text, VStack } from "@chakra-ui/react";
import logoMob from "../assets/logo/logo-mobile.svg";
import { useTranslation } from "react-i18next";

export const Logo: React.FC<{ isDesktop?: boolean; style?: object }> = ({
  isDesktop = false,
  style,
}) => {
  const { t } = useTranslation();

  return (
    <Link
      href="#header"
      mr="auto"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={isDesktop ? { md: "212px" } : { base: "84px" }}
      height={{ base: "62px", md: "62px" }}
      {...style}
    >
      <Image src={logoMob} alt="logo" />
      {isDesktop && (
        <VStack spacing={"2px"}>
          <Text fontSize={"35px"} fontWeight={700}>
            {t("logo.name")}
          </Text>
          <Text fontSize={"15px"} fontWeight={500}>
            {t("logo.description")}
          </Text>
        </VStack>
      )}
    </Link>
  );
};
