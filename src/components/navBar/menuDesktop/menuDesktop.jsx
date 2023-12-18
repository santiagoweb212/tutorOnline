import React from "react";
import Logo from "../logo";
import SearchBar from "@/components/searchBar";
import CategoryDropDown from "./categoryDropDown";
import { NavLink } from "react-router-dom";
import CarShop from "../carShop";
import HeartIcon from "./heartIcon";
import BellIcon from "./bellIcon";
import ImgPerfil from "./imgPerfil";
import { useAuthToken } from "@/store/userTokenStore";
import OverlayCardProfile from "./overlayCardProfile";

const MenuDesktop = () => {
  const isAuthUser = useAuthToken((state) => state.isAuthUser);
  console.log("-->user", isAuthUser);
  return (
    <>
      <Logo />
      <nav className="flex gap-1 items-center">
        <SearchBar />
        <CategoryDropDown />
        <NavLink className={"text-white text-sm  hover:text-yellow  text-center truncate "}>
          enseña en tutorOnline
        </NavLink>
        {isAuthUser && (
          <NavLink className={"text-white text-sm text-center truncate "}>mi aprendizaje</NavLink>
        )}
        <NavLink className={"text-white text-sm "}>cursos</NavLink>
        <CarShop />
        {isAuthUser && (
          <>
            <HeartIcon />
            <BellIcon />
            <ImgPerfil />
           
          </>
        )}
        {!isAuthUser && (
          <>
            <NavLink to={"/crear-cuenta"} className={" font-medium bg-white rounded-xl py-1 px-2 text-sm"}>crear cuenta</NavLink>
            <NavLink to={"/iniciar-session"} className={"text-white font-medium hover:bg-blue-600 hover:rounded-xl py-1 px-2 text-sm"}>
              iniciar sesion
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default MenuDesktop;
