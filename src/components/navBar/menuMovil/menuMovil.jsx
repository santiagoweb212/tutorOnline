import useMediaQuery from "@/hooks/useMediaQuery";
import { useOpenMenuNavBar } from "@/hooks/useOpenMenuNavbar";
import { useAuthToken } from "@/store/userTokenStore";
import React from "react";
import Logo from "../logo";
import MenuIcon from "../menuIcon";
import UserCardPrevProfile from "../userCardPrevProfile";
import { NavLink } from "react-router-dom";
import useCategoriesStore from "@/store/useCategorieStore";
import { linksMenuMobile } from "@/constants/links";
import ModalCartShop from "@/components/modalCartShop";
import CarShop from "../carShop";
import SearchBar from "@/components/searchBar";

const MenuMovil = () => {
  const { closeMenu, isMenuOpen, openMenu } = useOpenMenuNavBar();
  const isAuthUser = useAuthToken((state) => state.isAuthUser);

  const categories = useCategoriesStore((state) => state.categories);
  return (
    <>
      <div className=" flex gap-1">
        <MenuIcon typeIcon={"iconBar"} onClick={openMenu} />
      </div>

      <div className=" flex  items-center gap-1">
        <SearchBar />
        <CarShop />
      </div>

      <nav
        className={`${
          isMenuOpen ? "left-0 transition-all" : "left-[-100%] transition-all"
        } fixed w-full flex top-0 z-40 left-0 max-h-screen h-screen bg-[rgba(128,128,128,0.35)]`}
      >
        <div className="w-72  bg-[#f9f9f9] h-full rounded-r-2xl  ">
          <div className=" flex flex-col gap-1  ">
            {isAuthUser ? <UserCardPrevProfile /> : null}
            <div className="flex flex-col gap-1 border-b py-2 ">
              {isAuthUser ? (
                linksMenuMobile.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.link}
                    className="px-4 font-poppins text-sm font-normal hover:text-yellow"
                  >
                    {link.title}
                  </NavLink>
                ))
              ) : (
                <div className="flex flex-col px-4">
                  <NavLink>crear cuenta</NavLink>
                  <NavLink>iniciar session</NavLink>
                </div>
              )}
            </div>
            {/* categorias lista de categorias */}
            <div className="border-b py-2 ">
              <p className="px-4 font-poppins text-sm font-medium">
                Categorias
              </p>
              <ul>
                {categories &&
                  categories.map((category) => (
                    <li key={category.id} className="px-6">
                      {" "}
                      <NavLink>{category.nombre}</NavLink>
                    </li>
                  ))}
              </ul>
            </div>
            {/* ----------------------------------*/}
            <NavLink className={"px-4 font-poppins text-sm font-medium"}>
              Enseña en Tutor
              <span className="text-yellow">Online</span>
            </NavLink>
            {isAuthUser && (
              <button className="px-4 mx-4 py-1 font-poppins text-sm font-medium bg-red-400 hover:bg-red-700 text-white rounded-md place-self-start">
                cerrar session
              </button>
            )}
          </div>
        </div>

        <div className="self-start mx-4 my-6">
          <MenuIcon typeIcon={"iconClose"} onClick={closeMenu} />
        </div>
      </nav>
    </>
  );
};

export default MenuMovil;
