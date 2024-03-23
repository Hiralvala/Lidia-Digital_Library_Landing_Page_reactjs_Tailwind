import React from 'react'
import { features } from '../constants/constants'

const Features = () => {
  return (
    <section className='mt-12 sm:mt-28 flex flex-1 flex-col justify-center h-auto w-auto mx-4'>
        
            <h1 className='font-plus font-extrabold text-[26px] xs:text-4xl smd:text-[40px] md:text-5xl'>🤔• What You Can Do?</h1>
        

        <div className='flex flex-column flex-wrap sm:flex-row justify-around m-5 sm:mt-10'>
            {features.map(({logo,title,content},index)=>(
                <div className='flex flex-col  items-center w-60'>
                    <img src={logo} alt={title} srcset=""  className='w-28 h-28 object-contain'/>
                    <h1 className='font-plus font-bold text-xl -translate-y-7'>{title}</h1>
                    <p className='font-plus font-medium text-base text-paragraph -translate-y-7 max-w-48 text-center'>{content}</p>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Features
