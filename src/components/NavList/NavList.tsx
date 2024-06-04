import { Link, List, ListItem, ListProps } from "@chakra-ui/react";
import { ListNav } from "../../types";
// =========  список для навігації по сайту ============

export const NavList: React.FC<{
  listItem: ListNav[];
  onClick?: () => void;
  "aria-label": string;
  style?: ListProps;
}> = ({ listItem, "aria-label": ariaLabel, style, onClick }) => {
  return (
    <List
      display={"flex"}
      flexDirection="column"
      rowGap={2}
      w={{ base: "164px", md: "230px", lg: "213px" }}
      aria-label={ariaLabel}
      {...style}
    >
      {listItem.map((item, index) => (
        <ListItem
          key={index}
          // fontSize={{ base: "16px", lg: "20px" }}
          onClick={onClick}
        >
          <Link href={item.to}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
