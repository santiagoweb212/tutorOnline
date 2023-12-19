import React from "react";

const Welcome = ({ text }) => {
  return (
    <section className="bg-customDarkGray text-white   flex flex-col gap-5 p-5 justify-center items-center ">
      <h3 className="bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text text-3xl md:text-4xl font-extrabold flex justify-center text-center items-center  font-syncopate ">
        {text}
      </h3>
      <button className="bg-yellowOpacity  flex items-center justify-center text-customDarkGray text-2xl font-bold  p-3 rounded-lg hover:bg-yellow">
        Ver Cursos
      </button>
    </section>
  );
};

export default Welcome;
