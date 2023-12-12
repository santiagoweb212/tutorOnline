import React from "react";
import CardOpinions from "./cardOpinions";

const ComunityOpinions = () => {
  return (
    <section className=" ">
      <h2 className="text-center text-3xl md:text-5xl font-bold py-8">
        DE LA COMUNIDAD DE TUTOR<span className="text-yellow">ONLINE</span>
      </h2>
      <div className=" bg-gradient-to-b from-yellow to-transparent md:h-80 px-4 md:px-32 py-8">
        <CardOpinions />
      </div>
    </section>
  );
};

export default ComunityOpinions;
