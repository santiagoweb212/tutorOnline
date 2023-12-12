import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
const fetchCategorias =async() => {
  const response = await axios.get("http://localhost:3001/categorias")
  return response.data
};
const CategoryDropDown = () => {
  const {data}=useQuery({queryKey:["categorias"],queryFn:fetchCategorias})
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };
  const handleOpenDropDown = () => {
    setOpenDropDown(true);
    fetchCategorias();
  };
  return (
    <div className="relative " onMouseEnter={handleOpenDropDown} onMouseLeave={handleCloseDropDown}>
      <span className="md:text-white font-medium  md:hover:text-yellow" >categorias</span>
    
       <ul className="md:absolute  bg-white w-48 p-1 rounded-lg z-20 pointer-events-auto">
          {data && data.map((category) => (
            <li key={category.id} className="text-customDarkGray px-2 md:px-0 hover:bg-slate-100 text-ellipsis overflow-hidden whitespace-nowrap">{category.nombre}</li>
          ))}
        </ul>
    </div>
  );
};

export default CategoryDropDown;

 {/*  {openDropDown && (
        <ul className="  md:absolute bg-white w-48 p-1 rounded-lg z-20">
          {categories.map((category) => (
            <li key={category.id} className="text-customDarkGray px-2 md:px-0 hover:bg-slate-100 text-ellipsis overflow-hidden whitespace-nowrap">{category.nombre}</li>
          ))}
        </ul>
      )} */}
      

      /*  const [openDropDown, setOpenDropDown] = useState(false);
  

  
  const handleCloseDropDown = () => {
    setOpenDropDown(false);
  };
  const handleOpenDropDown = () => {
    setOpenDropDown(true);
    fetchCategorias();
  }; */