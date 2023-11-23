import React, { useState } from "react";

const CategoryDropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategorias = () => {
    fetch("http://localhost:3001/categorias")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error:", error));
  };
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };
  const handleOpenDropDown = () => {
    setOpenDropDown(true);
    fetchCategorias();
  };
  return (
    <div className="relative cursor-pointer" onMouseEnter={handleOpenDropDown} onMouseLeave={handleCloseDropDown}>
      <span className="text-white font-medium hover:text-yellow" >categorias</span>
      {openDropDown && (
        <ul className="absolute bg-white w-48 p-1 rounded-lg z-20">
          {categories.map((category) => (
            <li key={category.id} className="text-customDarkGray hover:bg-slate-100 text-ellipsis overflow-hidden whitespace-nowrap">{category.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropDown;
