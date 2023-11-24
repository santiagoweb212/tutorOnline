import React from 'react'

export const Header = () => {

  const imgUrl = "https://www.esan.edu.pe/images/blog/2020/06/04/1500x844-imagen1.jpg";
  const contenido = "Error, revise la ruta por favor";  
  return (
    <>
        <header>
            <div className='flex flex-col justify-center text-center flex-wrap' >
                <img className='h-96'
                src={imgUrl}
                alt={contenido}
                />
                <div className='bg-black text-white p-3 text-4xl font-bold 'style={{ fontFamily: 'Poppins' }}>Nosotros</div>
            </div>
        </header>
    </>
  )
}
