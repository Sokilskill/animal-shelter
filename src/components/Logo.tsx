import { Image, Link, Text, VStack } from "@chakra-ui/react";
import logoMob from "../assets/logo/logo-mobile.svg";
import { useTranslation } from "react-i18next";

export const Logo: React.FC<{ viewText?: boolean; style?: object }> = ({
  viewText = true,
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
      gap={"5px"}
      lineHeight={1}
      height={{ base: "62px", md: "62px" }}
      {...style}
    >
      <Image src={logoMob} alt="logo" />
      {viewText && (
        <VStack spacing={"2px"}>
          <Text fontSize={"33px"} fontWeight={700}>
            {t("logo.name")}
          </Text>
          <Text fontSize={"13px"} fontWeight={500}>
            {t("logo.description")}
          </Text>
        </VStack>
      )}
    </Link>
  );
};
