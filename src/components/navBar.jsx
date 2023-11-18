import React from "react";
import { NavLink } from "react-router-dom";
import CategoryDropDown from "./categoryDropDown";
import cartShopping from "@/assets/cartShop.png";
import SearchBar from "./searchBar";
const NavBar = () => {
  return (
    <header className="bg-customDarkGray p-3 flex justify-between">
      <div className="">
        <NavLink to="/">
          <h1 className="text-white text-2xl font-poppins inline-flex">
            Tutor<span className="text-yellow">Online</span>
          </h1>
        </NavLink>
   
      </div>
      <SearchBar/>
      <p>categorias</p>
      <NavLink>
        enseña en tutorOnline
      </NavLink>
    </header>
  );
};

export default NavBar;
