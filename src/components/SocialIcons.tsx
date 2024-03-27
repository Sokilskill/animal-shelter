import { Link, List, ListItem } from "@chakra-ui/react";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from "../assets/icons/socIcons";

export const ListSocialIcons = () => {
  return (
    <List display="flex" justifyContent="space-between">
      <ListItem>
        <Link href="https://www.facebook.com/?locale=uk_UA">
          <FacebookIcon boxSize={8} />
        </Link>
      </ListItem>

      <ListItem>
        <Link href="https://www.instagram.com">
          <InstagramIcon boxSize={8} />
        </Link>
      </ListItem>

      <Link href="https://www.telegram.com">
        <TelegramIcon boxSize={8} />
      </Link>
      <ListItem></ListItem>
    </List>
  );
};
