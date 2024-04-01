import { Image, Link } from "@chakra-ui/react";
import logoTabletDesk from "../assets/logo/logo-desk-tablet.svg";
import logoMob from "../assets/logo/logo-mobile.svg";

export const LogoTabletDesk: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={logoTabletDesk}
        alt="Зоюраження логотипу"
        width={{ base: "212px" }}
        height={{ base: "62px" }}
      />
    </Link>
  );
};

export const LogoMob: React.FC<{ style?: object }> = ({ style }) => {
  return (
    <Link href="/" {...style}>
      <Image
        src={logoMob}
        alt="Зоюраження логотипу"
        width={{ base: "84px" }}
        height={{ base: "62px" }}
      />
    </Link>
  );
};
