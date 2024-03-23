import React from 'react'
import location from '../assets/Location.svg'

const Location = () => {
  return (
    <section className="mt-12 mx-4  ">
        <h1 className="font-plus font-extrabold text-[26px] xs:text-4xl smd:text-[40px] md:text-5xl ">
        🗺• Our Library Location
        </h1>
        <div className='flex items-center justify-center'> 
            <img src={location} alt="" className='mt-6 flex items-center justify-center' />
        </div>
    </section>
  )
}

export default Location
