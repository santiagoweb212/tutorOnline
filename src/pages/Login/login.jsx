import { NavLink } from "react-router-dom";
import BotonTutor from "../../components/botonTutor";
import { useState } from "react";
import Form from "./components/form"

function Login() {
  
  return (
    <div className="max-w-sm mx-auto mt-4 mb-4 bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">
        Login
      </h2>

      <Form/>
      <a href="#" className="block text-white font-extrabold underline mt-2">
        Hey olvidado la contraseña
      </a>
      <div className="flex justify-center gap-x-2 border-t border-yellow mt-4 pt-0.5">
        <p className="text-yellow">¿No Tienes una cuenta?</p>
        <NavLink
          to={"/crear-cuenta"}
          className="block text-white font-extrabold underline"
        >
          Registrate
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
