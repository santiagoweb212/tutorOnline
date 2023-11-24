import React from "react";
import CardOpinions from "./cardOpinions";

const ComunityOpinions = () => {
  return (
    <section className="h-64 ">
      <h2 className="text-center text-5xl font-bold py-8">
        DE LA COMUNIDAD DE TUTOR<span className="text-yellow">ONLINE</span>
      </h2>
      <div bg-gradient-to-b from-yellow to-transparent>
        <CardOpinions />
      </div>
    </section>
  );
};

export default ComunityOpinions;
