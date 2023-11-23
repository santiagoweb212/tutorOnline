import React from "react";

const ModalCartShop = ({openModalCartShop}) => {
    
  return (
    <div className="absolute w-60 bg-slate-200 right-0 z-20" >
      {openModalCartShop && (
          <article className="flex bg-red-500  items-center p-2">
          <img src="" alt="imgProduct" className="w-[5rem] h-16 bg-orange-200" />
          <div className="flex flex-col">
            <h1>curso python</h1>
            <span>nombre tutor</span>
            <span>precio</span>
          </div>
        </article>
      )}
      
    </div>
  );
};

export default ModalCartShop;
