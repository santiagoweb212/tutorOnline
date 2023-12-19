import { NavLink } from "react-router-dom";
import Form from "./components/form";
function RegistroUsuario() {
  return (
    <div className="max-w-md mx-auto my-9  bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">
        Registrate
      </h2>
      <p className="text-justify text-yellow text-sm ">
        Acceda a nuestro contenido y conviertete en un experto
      </p>
      <Form />
      <p className="text-justify text-white mt-1">
        Al registrarte, aceptas nuestras{" "}
        <a href="#" className="font-extrabold underline">
          Condiciones de uso
        </a>{" "}
        y nuestra{" "}
        <a href="#" className="font-extrabold underline">
          Política de privacidad
        </a>
        .
      </p>
      <div className="flex justify-center gap-x-2 border-t border-yellow mt-4 pt-0.5">
        <p className="text-yellow">¿Tienes una cuenta?</p>
        <NavLink to={"/iniciar-session"} className="block text-white font-extrabold underline">
          Inicia Sesion
        </NavLink>
      </div>
    </div>
  );
}

export default RegistroUsuario;
