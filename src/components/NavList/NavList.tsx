import { Link, List, ListItem, ListProps } from "@chakra-ui/react";
import { ListNav } from "../../types";
import { useTranslation } from "react-i18next";

interface NavListProps {
  listItem: ListNav[];
  onClick?: () => void;
  "aria-label": string;
  style?: ListProps;
}

export const NavList: React.FC<NavListProps> = ({
  listItem,
  "aria-label": ariaLabel,
  style,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <List
      display="flex"
      flexDirection="column"
      rowGap={2}
      w={{ base: "164px", md: "230px", lg: "213px" }}
      aria-label={ariaLabel}
      {...style}
    >
      {listItem.map((item, index) => (
        <ListItem key={item.to + index} onClick={onClick}>
          <Link href={item.to}>{t(item.name)}</Link>
        </ListItem>
      ))}
    </List>
  );
};
