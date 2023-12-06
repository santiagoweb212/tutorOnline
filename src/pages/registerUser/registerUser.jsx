import BotonTutor from "../../components/botonTutor";
import { useState } from "react";

function RegistroUsuario(){
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setErrors({ ...errors, username: value.trim() === '' ? 'El campo es requerido' : (value.length < 3 ? 'El nombre es demasiado corto' : '') });
        break;
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setErrors({ ...errors, email: !emailRegex.test(value) ? 'Correo inválido' : '' });
        break;
      case 'password':
        setErrors({ ...errors, password: value.length < 6 ? 'La contraseña es demasiado corta' : '' });
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
  };
  /* const onSubmit = (data) => {
    // Procesar los datos aquí después de la validación exitosa
    console.log(data);
  } */
  return (
    <div className="max-w-md mx-auto mt-4 mb-4 bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">Registrate</h2>
      <p className="text-justify text-yellow mb-3">Acceda a nuestro contenido y conviertete en un experto</p>
      
      <form /* onSubmit={handleSubmit(onSubmit)} */ className="space-y-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">
            Nombre completo:
          </label>
          <input            
            type="text"
            name="username"
            value={values.username} 
            onChange={handleChange}            
            placeholder="Ingrese su nombre completo"            
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.username && (
            <div className="text-red-500">{errors.username}</div>
          )}
        </div>   

        <div className="mb-4">
          <label htmlFor="email" className="block text-white">
            Correo electronico:
          </label>
          <input            
            type="email" 
            name="email"      
            value={values.email} 
            onChange={handleChange}
            placeholder="Ingrese su correo"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-white">
            Contraseña:
          </label>
          <input            
            type="password"
            name="password"    
            value={values.password} 
            onChange={handleChange}
            placeholder="Ingrese su contraseña"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
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