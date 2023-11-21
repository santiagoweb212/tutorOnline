import React from "react";

import lupa from "@/assets/lupa.svg";
const SearchBar = () => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Buscar..."
        className="outline-none focus:outline-none px-2 w-full h-full rounded-[0.4rem]"
      />
      <button className="absolute  top-1/2 right-1 transform -translate-y-1/2 cursor-pointer"><img className="h-4 w-4" src={lupa} alt="" /></button>
    </div>
  );
};

export default SearchBar;
