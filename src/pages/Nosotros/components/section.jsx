import React from 'react';

export const Section = ({ data, index }) => {
  const flexDirection = index % 2 === 0 ? 'flex-row' : 'flex-row-reverse';

  return (
    <>
      <section className={`flex ${flexDirection} justify-center flex-wrap bg-white`}>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24'>
          <h1 className='text-center text-4xl font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12'>{data.nosotros}</h1>
          <p className='text-center w-full'>{data.descripcion}</p>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div className='relative h-full'>
            <img
              className='w-full h-full p-10 rounded bg-grey-500 transition-transform transform hover:scale-105'
              src={data.imagen}
              alt={data.mensaje}
            />
          </div>
        </div>
      </section>
    </>
  );
};