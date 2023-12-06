// En tu archivo formulario.jsx
import React, { useState } from 'react';

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    archivo: null,
  });

  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    archivo: '',
    general: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
  
    // Validar que solo se ingresen letras
    if (id === 'nombre' && !/^[A-Za-z]+$/.test(value)) {
      setErrors({ ...errors, [id]: 'El nombre solo debe contener letras' });
    } else {
      setErrors({ ...errors, [id]: '' });
    }
  
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData({ ...formData, [id]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar validaciones aquí
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    // Agrega más validaciones según tus requisitos

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aquí puedes realizar la lógica de envío del formulario
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre);
      formDataToSend.append('correo', formData.correo);
      formDataToSend.append('mensaje', formData.mensaje);
      formDataToSend.append('archivo', formData.archivo);

      await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Formulario enviado:', formData);
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
        archivo: null,
      });
      setErrors({
        nombre: '',
        correo: '',
        mensaje: '',
        archivo: '',
        general: '',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrors({ ...errors, general: 'Error al enviar el formulario' });
    }
  };

  return (
    <>
      <section className='flex p-4 pb-10 justify-around items-center flex-row flex-wrap border-black-500/100 border-2 m-8'>
        <div>
          <h1 className='text-4xl font-bold'>Formulario de Contacto</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='italic' >
            <div>
              <label htmlFor='nombre'>Nombre:</label>
              <input
                className='p-1 rounded border-2 border-gray-300'
                type='text'
                id='nombre'
                value={formData.nombre}
                onChange={handleInputChange}
                style={{ width: '100%' }}
                required
              />
              <div className='error'>{errors.nombre}</div>
            </div>

            <div>
              <label htmlFor='correo'>Correo Electrónico:</label>
              <input
                className='p-1 rounded border-2 border-gray-300'
                type='email'
                id='correo'
                value={formData.correo}
                onChange={handleInputChange}
                style={{ width: '100%' }}
                required
              />
              <div className='error'>{errors.correo}</div>
            </div>

            <div>
              <label htmlFor='mensaje'>Mensaje:</label>
              <textarea
                className='p-1 rounded border-2 border-gray-300'
                id='mensaje'
                value={formData.mensaje}
                onChange={handleInputChange}
                style={{ width: '100%', height: '150px' }}
                required
              ></textarea>
              <div className='error'>{errors.mensaje}</div>
            </div>

            <div>
              <label htmlFor='archivo'>Adjuntar Archivo:</label>
              <input
                className='p-1 rounded'
                type='file'
                id='archivo'
                onChange={handleFileChange}

              />
              <div className='error'>{errors.archivo}</div>
            </div>

            <div className='error'>{errors.general}</div>

            <div className='bg-black w-1/6 text-white text-center p-2 hover:bg-blue-500 mt-4 rounded'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
