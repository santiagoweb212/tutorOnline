import BotonTutor from "../../components/botonTutor";
import { useState } from "react";

function Login(){
    const [values, setValues] = useState({
        email: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
          case 'email':
            // eslint-disable-next-line no-case-declarations
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setErrors({ ...errors, email: !emailRegex.test(value) ? 'Correo inválido' : '' });
            break;
          case 'password':
            setErrors({ ...errors, password: value.length < 6 ? 'Ingresar contraseña valida' : '' });
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
        <div className="max-w-sm mx-auto mt-4 mb-4 bg-customDarkGray p-8 rounded-lg shadow-md font-poppins">
          <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-wider">Login</h2>        
          
          <form /* onSubmit={handleSubmit(onSubmit)} */>           
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
    
            <div className="mb-9">
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
            
            <BotonTutor texto="Iniciar Sesion"/>            
          </form>
          <a href="#" className="block text-white font-extrabold underline mt-2">Hey olvidado la contraseña</a>
          <div className="flex justify-center gap-x-2 border-t border-yellow mt-4 pt-0.5">
            <p className="text-yellow">¿No Tienes una cuenta?</p>        
            <a href="#" className="block text-white font-extrabold underline">Registrate</a>
          </div>
        </div>
      );
    }
    
    export default Login;
