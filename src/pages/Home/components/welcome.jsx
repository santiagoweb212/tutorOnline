import React from "react";

const Welcome = ({ text }) => {
  return (
    <section className="bg-customDarkGray text-white text-5xl  flex flex-col gap-5 justify-center items-center p-10">
      <h3 className="bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text text-5xl font-extrabold flex justify-center text-center items-center w-[62rem] font-syncopate ">
        {text}
      </h3>
      <button className="bg-yellowOpacity  flex items-center justify-center text-customDarkGray text-2xl font-bold  p-3 rounded-lg hover:bg-yellow">
        Ver Cursos
      </button>
    </section>
  );
};

export default Welcome;
