import { logos } from "@/constants/imgRedes";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const cursos = [
    "Desarrollo web",
    "Marketing Digital",
    "Fundamentos de Programacion",
    "Curso PHP Basico",
    "Javascript Avanzado",
  ];
  return (
    <section className="w-full  bg-customDarkGray flex  flex-col px-6 py-4 ">
      <div className="flex text-white gap-24 justify-around ">
        <div className=" ">
          <h3 className="text-white font-bold text-xl pb-2">Sobre Nosotros</h3>
          <p className="w-56 ">
            Somos una plataforma de aprendizaje que ofrece cursos en línea de
            alta calidad.Nuestra misión es ayudar a las personas a aprender y
            crecer.
          </p>
          <NavLink className="text-white font-bold text-lg">
            {" "}
            ponte en contacto con nosotros?
          </NavLink>
        </div>
        <div className=" ">
          <h3 className="text-white font-bold text-xl  pb-2">Cursos</h3>
          <ul className="pb-2">
            {cursos.map((curso) => (
              <li key={curso}>{curso}</li>
            ))}
          </ul>
          <NavLink to={'/'} className=" bg-[#4A484A] p-2 font-bold rounded-lg hover:bg-slate-600 ">
            enseña en Tutor<span className="text-yellow">Online</span>
          </NavLink>
        </div>
        <div className="">
          <h3 className="text-white font-bold text-xl  pb-2">Redes Sociales</h3>
          <div className="flex gap-6">
            {" "}
            {logos.map((img) => (
              <NavLink key={img.id} to={img.url}>
                <img src={img.src} alt={"img"} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white text-center  pt-5">
        © 2023 Tutor<span className="text-yellow">Online</span>. Todos los
        derechos reservados
      </p>
    </section>
  );
};

export default Footer;
