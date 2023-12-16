import { useState } from "react";

export const useOpenMenuNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return { isMenuOpen, openMenu, closeMenu };
};
