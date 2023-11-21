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
    <span>categorias</span>
  );
};

export default CategoryDropDown;
