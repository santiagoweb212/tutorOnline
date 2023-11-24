// Nosotros.jsx
import React from 'react';
import { Header } from './components/header';
import { Section } from './components/section';
import { data } from './components/data';

export const Nosotros = () => {
  return (
    <>
      <main className='bg-pink-200'>
        <Header />

        {/* Muestra la primera sección */}
        <Section data={data[0]} index={0} />

        {/* Muestra la segunda sección con flex-row-reverse */}
        <Section data={data[1]} index={1} />

        {/* Muestra la segunda sección con flex-row-reverse */}
        <Section data={data[2]} index={2} />

        {/* Muestra la segunda sección con flex-row-reverse */}
        <Section data={data[3]} index={3} />
         
      </main>
    </>
  );
};