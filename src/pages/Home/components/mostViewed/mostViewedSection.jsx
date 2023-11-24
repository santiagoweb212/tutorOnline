import React, { Children } from 'react'


const MostViewedSection = ({children}) => {
  return (
    <section className='p-4 pb-8 bg-[#f9f9f9]'>
        <h2 className='text-3xl font-bold pt-1 pb-4'>Los mas vistos</h2>
       {children}
    </section>
  )
}

export default MostViewedSection