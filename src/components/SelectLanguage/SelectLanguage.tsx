import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const SelectLanguage: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton
        _focusVisible={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6);" }}
      >
        {i18n.language === "uk" ? "🇺🇦" : "🇬🇧"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage("en")}>🇬🇧 English</MenuItem>
        <MenuItem onClick={() => changeLanguage("uk")}>🇺🇦 Українська</MenuItem>
      </MenuList>
    </Menu>
  );
};
