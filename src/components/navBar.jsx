import React from "react";
import { NavLink } from "react-router-dom";
import CategoryDropDown from "./categoryDropDown";
import cartShopping from "@/assets/cartShop.png";
import SearchBar from "./searchBar";
import ModalCartShop from "./modalCartShop";
const NavBar = () => {
  const [openModalCartShop, setOpenModalCartShop] = React.useState(false);
  const handleOpenModalCartShop = () => {
    setOpenModalCartShop(true);
  };
  const handleCloseModalCartShop = () => {
    setOpenModalCartShop(false);
  };
  return (
    <header className="bg-customDarkGray p-3 flex justify-between h-14 max-h-14">
      <div className="">
        <h1 className="text-white text-2xl font-poppins inline-flex">
          <NavLink to={"/"}>
            Tutor<span className="text-yellow">Online</span>
          </NavLink>
        </h1>
      </div>
      <nav className="flex gap-2 items-center">
        <SearchBar />
        <CategoryDropDown />
        <NavLink
          className={"text-white font-medium hover:text-yellow"}
          to={"/"}
        >
          enseña en tutorOnline
        </NavLink>
        <div
          className=" h-full relative cursor-pointer "
          onMouseEnter={handleOpenModalCartShop}
          onMouseLeave={handleCloseModalCartShop}
        >
          <img src={cartShopping} alt="imgcart" className="h-full" />
          <ModalCartShop openModalCartShop={openModalCartShop} />
        </div>
        <NavLink
          to={"/registro"}
          className=" h-full text-customDarkGray px-2 bg-white rounded-xl font-medium flex items-center justify-center"
        >
          crear cuenta
        </NavLink>
        <NavLink
          to={"/iniciar-session"}
          className="h-full text-white  font-medium flex items-center justify-center"
        >
          iniciar session
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
