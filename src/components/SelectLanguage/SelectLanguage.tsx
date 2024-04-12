import { Select, SelectProps } from "@chakra-ui/react";

export const SelectLanguage: React.FC<SelectProps> = (props) => {
  return (
    <Select fontSize="20px" border="none" w="max-content" {...props}>
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </Select>
  );
};
