import React, { useState } from 'react';

export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
    archivo: null,
  });

  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que en el campo de nombre solo se ingresen letras
    if (name === 'nombre' && !/^[A-Za-z]+$/.test(value)) {
      setErrores({
        ...errores,
        [name]: 'El nombre solo debe contener letras',
      });
    } else {
      setErrores({
        ...errores,
        [name]: '',
      });
    }

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleArchivoChange = (e) => {
    const archivo = e.target.files[0];
    setFormulario({
      ...formulario,
      archivo: archivo,
    });
  };

  const validarFormulario = () => {
    let erroresFormulario = {};

    if (!formulario.nombre.trim()) {
      erroresFormulario.nombre = 'El nombre es obligatorio';
    }

    if (!formulario.correo.trim()) {
      erroresFormulario.correo = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      erroresFormulario.correo = 'El correo electrónico no es válido';
    }

    if (!formulario.asunto.trim()) {
      erroresFormulario.asunto = 'El asunto es obligatorio';
    }

    if (!formulario.mensaje.trim()) {
      erroresFormulario.mensaje = 'El mensaje es obligatorio';
    }

    setErrores(erroresFormulario);

    // Si no hay errores, retorna true; de lo contrario, retorna false
    return Object.keys(erroresFormulario).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una llamada a la API.
      console.log('Formulario enviado:', formulario);
      // Reiniciar el estado del formulario después de enviarlo si es necesario
      setFormulario({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: '',
        archivo: null,
      });
    } else {
      console.log('Formulario no válido. Por favor, corrige los errores.');
    }
  };

  return (
    <>
      <section className='flex p-4 pb-10 justify-around items-center flex-row flex-wrap border-black-500/100 border-2 m-8'>
        <div>
          <h1 className='text-4xl font-bold'>Formulario de Contacto</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='italic'>
            <div>
              <label htmlFor='nombre'>Nombre:</label>
              <input
                className='p-1 rounded border-2 border-gray-300'
                type='text'
                id='nombre'
                name='nombre'
                value={formulario.nombre}
                onChange={handleChange}
                style={{ width: '100%' }} // Ancho al 100%
                required
              />
              <div className='error'>{errores.nombre}</div>
            </div>

            <div>
              <label htmlFor='correo'>Correo Electrónico:</label>
              <input
                className='p-1 rounded border-2 border-gray-300'
                type='email'
                id='correo'
                name='correo'
                value={formulario.correo}
                onChange={handleChange}
                style={{ width: '100%' }} // Ancho al 100%
                required
              />
              <div className='error'>{errores.correo}</div>
            </div>


            <div>
              <label htmlFor='mensaje'>Mensaje:</label>
              <textarea
                className='p-1 rounded border-2 border-gray-300'
                id='mensaje'
                name='mensaje'
                value={formulario.mensaje}
                onChange={handleChange}
                style={{ width: '100%', height: '150px' }} // Ancho al 100% y altura de 150px
                required
              ></textarea>
              <div className='error'>{errores.mensaje}</div>
            </div>

            <div>
              <label htmlFor='archivo'>Adjuntar Archivo :</label>
              <input
                className='p-1 rounded'
                type='file'
                id='archivo'
                name='archivo'
                onChange={handleArchivoChange}
                
              />
            </div>

            <div className='bg-black w-1/6 text-white text-center p-2 hover:bg-blue-500 mt-4 rounded'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
