import React from 'react'
import Cover1 from '../assets/Cover.png'

const Cover = () => {
  return (
  //   <div className='sm:w-[720px] h-[713px] max-w-[768px] left-0 absolute sm:left-[720px] top-0 z-[0] right-0'>
  //       <img src={Cover1} alt="cover" />
  //     </div>
  
  <div className='absolute  sm:left-1/2 sm:h-[490px] ss:h-[720px] smd:h-[570px]  flex flex-1 z-[0] sm:right-0   sm:top-0 overflow-x-hidden -left-16 top-[65px] md:h-[670px] lg:h-[720px] lgx:h-auto '>
    <img src={Cover1} alt="cover" className='w-[884px] '/>
  </div>






  )
}

export default Cover
