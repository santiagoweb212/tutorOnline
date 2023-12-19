import React from "react";

const Card = ({ foto, nombre, opinion }) => {
  return (
    <article className="relative  bg-white rounded-xl py-4">
      <div className=" absolute left-2/4 w-24 h-24 transform -translate-x-1/2 -top-1/4">
        <img src={foto} alt="" className="rounded-full w-full h-full" />
      </div>
      <div className=" mt-8">
        <h2 className="font-bold text-xl py-3 text-center">{nombre}</h2>
        <p className="px-4 text-center font-medium text-slate-700 text-sm">{opinion}</p>
      </div>
    </article>
  );
};

export default Card;
