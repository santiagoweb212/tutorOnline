import { useEffect, useState } from "react";
import BotonTutor from "../../components/botonTutor";
import {useForm} from 'react-hook-form';

function RegistroUsuario(){
  const {register, handleSubmit, formState:{errors} } = useForm();
  const [usersData, setUsersData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/user');
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  const onSubmit = (data) => {
    // Verificar si el usuario o correo ya existen en los datos cargados
    const userExists = usersData.some(
      (user) => user.username === data.username || user.email === data.email
    );

    if (userExists) {
      console.log('El usuario o correo ya existe');
      alert("El usuario o correo ya existe");
      // Aquí podrías mostrar un mensaje de error al usuario
    } else {      
      console.log('Datos enviados:', data);
      alert("Datos enviados correctamente");
      // Aquí podrías proceder con el registro del usuario
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 mb-4 bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">Registrate</h2>
      <p className="text-justify text-yellow mb-3">Acceda a nuestro contenido y conviertete en un experto</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">
            Nombre completo:
          </label>
          <input
            id="username"
            type="text"
            {...register('username', {
              required: 'Este campo es requerido',
              minLength: { value: 4, message: 'El nombre de usuario es demasiado corto' },
              maxLength: { value: 30, message: 'El nombre de usuario es demasiado largo' },
            })}            
            placeholder="Ingrese su nombre completo"            
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>
          )}
        </div>   

        <div className="mb-4">
          <label htmlFor="email" className="block text-white">
            Correo electronico:
          </label>
          <input
            id="email"
            type="email"       
            {...register('email', {
              required: 'Este campo es requerido',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Correo electrónico inválido',
              },
            })}
            placeholder="Ingrese su correo"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-white">
            Contraseña:
          </label>
          <input
            id="password"
            type="password"    
            {...register('password', {
              required: 'Este campo es requerido',
              minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
            })}
            placeholder="Ingrese su contraseña"           
            className="w-full border-gray-300 rounded-md mt-1 px-3 py-2"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
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
