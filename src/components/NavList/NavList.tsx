import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, ListProps } from "@chakra-ui/react";
import { ListNav } from "../../types";

// =========  список для навігації по сайту ============

export const NavList: React.FC<{
  listItem: ListNav[];
  "aria-label": string;
  style?: ListProps;
}> = ({ listItem, "aria-label": ariaLabel, style }) => {
  return (
    <List
      display={"flex"}
      flexDirection="column"
      rowGap={2}
      w={{ base: "164px" }}
      aria-label={ariaLabel}
      {...style}
    >
      {listItem.map((item, index) => (
        <ListItem key={index} fontSize={{ base: "16px" }}>
          <RouterLink to={`/${item.to}`}>{item.name}</RouterLink>
        </ListItem>
      ))}
    </List>
  );
};
