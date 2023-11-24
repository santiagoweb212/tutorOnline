import BotonTutor from "../../components/botonTutor";

function RegistroUsuario(){

  return (
    <div className="max-w-md mx-auto mt-4 bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">Registrate</h2>
      <p className="text-justify text-yellow mb-3">Acceda a nuestro contenido y conviertete en un experto</p>
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-white">
            Nombre completo:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre completo"            
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
        </div>        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">
            Correo electronico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="contraseña" className="block text-white">
            Contraseña:
          </label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="Ingrese su contraseña"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
        </div>
        <div className="flex mb-4 mt-1 gap-1">
            <div className="w-11 h-1 bg-gray-200"></div>
            <div className="w-11 h-1 bg-gray-200"></div>
            <div className="w-11 h-1 bg-gray-200"></div>
            <div className="w-11 h-1 bg-gray-200"></div>
        </div>
        <BotonTutor texto="Registrar"/>            
      </form>
      <p className="text-justify text-white mt-1">Al registrarte, aceptas nuestras <a href="#" className="font-extrabold underline">Condiciones de uso</a> y nuestra <a href="#" className="font-extrabold underline">Política de privacidad</a>.</p>
      <div className="flex justify-center gap-x-2 border-t border-yellow mt-4 pt-0.5">
        <p className="text-yellow">¿Tienes una cuenta?</p>        
        <a href="#" className="block text-white font-extrabold underline">Inicia Sesion</a>
      </div>
    </div>
  );
}

export default RegistroUsuario;
