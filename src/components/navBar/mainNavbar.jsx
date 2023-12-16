import React, { useEffect } from "react";

import MenuMovil from "./menuMovil/menuMovil";
import useMediaQuery from "@/hooks/useMediaQuery";
import MenuDesktop from "./menuDesktop/menuDesktop";
const MainNavbar = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <header className="bg-customDarkGray h-12 px-4 flex items-center justify-between gap-1 ">
      {isDesktop ? <MenuDesktop /> : <MenuMovil />}
    </header>
  );
};

export default MainNavbar;
