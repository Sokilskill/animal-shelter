import { List, ListItem } from "@chakra-ui/react";
import { Card } from "../Card";
import { Animal } from "../../types";

interface ListOgAnimalsProps {
  animals: Animal[];
}

export const ListOgAnimals: React.FC<ListOgAnimalsProps> = ({ animals }) => {
  return (
    <List>
      {animals.map((animal) => (
        <ListItem key={animal.id}>
          <Card item={animal} />
        </ListItem>
      ))}
    </List>
  );
};
