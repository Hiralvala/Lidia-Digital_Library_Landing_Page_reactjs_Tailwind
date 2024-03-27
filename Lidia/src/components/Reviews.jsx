import React from 'react'
import  {reviews}  from '../constants/constants.js'


const Reviews = () => {
  return (
    <section className="mt-12 mx-4 sm:mx-0">
        <h1 className='text-primary text-[16px] mb-2 font-bold' id='review'>REVIEWS</h1>
        <h1 className="font-plus font-bold text-[26px] xs:text-4xl smd:text-[40px] md:text-5xl ">
        💬• Reviews of Others
        </h1>
        <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center font-plus mt-6'>
            {reviews.map(({reviewer,review,name,identity})=>(
                <div className='flex flex-col  items-center text-center sm:w-[366px] sm:h-[455px] shadow-xl border border-border mb-6 xs:m-8 ss:mx-20 smm:w-[366px] smm:h-[455px] smm:text-xl sm:mx-4 lg:mx-8'>
                    <img src={reviewer} alt="" className='w-32 my-10 smm:my-12'/>
                    <p className='mx-10 font-plus font-medium text-paragrah sm:max-w-[230px] lgx:max-w-[240px]  lg:text-lg text-sm sm:text-xs smd:text-sm lgx:text-base'>{review}</p>
                    <p className='font-plus font-medium  text-name my-5 smm:my-7 lg:text-lg text-sm sm:text-xs smd:text-sm lgx:text-base'>{name}</p>
                    <p className='font-plus font-medium text-black mb-7 lg:text-lg text-sm sm:text-xs smd:text-sm lgx:text-base'>{identity}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Reviews
