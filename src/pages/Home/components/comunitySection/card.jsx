import React from "react";

const Card = ({ foto, nombre, opinion }) => {
  return (
    <arcticle className="relative w-56 bg-white rounded-xl py-4">
      <div className=" absolute left-2/4 transform -translate-x-1/2 -top-1/4">
        <img src={foto} alt="" className="rounded-full" />
      </div>
      <div className=" mt-8">
        <h2 className="font-bold text-xl py-3 text-center">{nombre}</h2>
        <p className="px-4 text-center font-medium text-slate-700 text-sm">{opinion}</p>
      </div>
    </arcticle>
  );
};

export default Card;
