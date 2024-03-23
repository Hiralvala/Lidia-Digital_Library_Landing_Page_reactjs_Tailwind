import React from 'react'
import '../index.css'
// import {DompetAyahSepatuLbu, TalkingToStranger, TheMidNightLibrary, TheVisualMba} from '../assets'
import Left from '../assets/Left.png'


const FirstPage = () => {
  return (
    // <section className='flex  sm:flex-row flex-col flex-wrap-reverse'>
    //   <div className='basis-[50%] mt-7'>
    //     <h1 className='font-plus font-extrabold text-[76px] leading-[89px]'>
    //         Search & review <br/> your <span className='text-primary underline'>fav book </span>effortlessly
    //     </h1>
    //     <p className='font-plus font-normal text-base leading-[30px] text-paragraph max-w-[501px] my-5'>
    //     Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where you can effortlessly search your favorite books.✨
    //     </p>
    //     <div className="w-[200px]  h-[60px]">
    //         <button className="bg-primary py-[17.5px] px-[56px] rounded-[10px] btn w-auto h-full">
    //             <p className="text-white font-plus font-bold text-base leading-[25px]">Start now →</p>
    //     </button>
    //   </div>
    //   </div>
    //   <div className='basis-[50%] z-[3]'>
        
    //         <img src={DompetAyahSepatuLbu} alt="photo1" className='w-[209px] h-[302px] absolute top-[371px] left-[720px] rounded-[10px]'/>
    //         <img src={TalkingToStranger} alt="photo2" className='w-[143px] h-[214px] absolute top-[167px] left-[956px] rounded-[10px]'/>
    //         <img src={TheVisualMba} alt="photo3" className='w-[108px] h-[163px] absolute top-[520px] left-[1028px] rounded-[10px]'/>
    //         <img src={TheMidNightLibrary} alt="photo4" className='w-[150px] h-[288px] absolute top-[287px] left-[1170px] rounded-[10px]'/>

        
    //   </div>
      
    // </section>

    <section className=' flex flex-col sm:flex-row-reverse'>
      <div className='basis-1/2 z-10 mt-10 sm:mt-0 w-auto h-auto '>
        <img src={Left} alt="" className='  md:translate-x-5'  />
      </div>
      <div className='basis-1/2 flex flex-col mt-16 mx-4 ss:mt-20 smm:mt-16 sm:mt-0 smd:mt-4 lg:mt-2 lgx:pl-4 lgx:mt-3 xl:mt-5'>
        <h1 className='font-plus font-extrabold text-[44px] md:text-[70px] md:leading-[85px] sm:leading-[50px] sm:text-[40px] smd:text-[45px] smd:leadding-[55px] lg:leading-[89px] lg:text-[70px] lgx:text-[75px] xl:text-[85px] xl:leading-[95px]'>
          Search & review <br/> your <span className='text-primary underline'>fav book</span> effortlessly
        </h1>
        <p className='font-plus font-normal text-base leading-6 sm:leading-[25px] sm:text-sm text-paragraph max-w-[600px] sm:max-w-[501px] smd:max-w-[450px] my-3 smd:my-6
         smd:text-base smd:leading-[28px] md:my-5
          lgx:text-lg xl:max-w-[501px] xl:my-8 xl:text-xl xl:leading-[35px]'>
          Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨
        </p>
        <button className="bg-primary py-[17.5px] px-[56px] rounded-[10px] btn w-fit text-white font-plus h-fitt text-base leading-[25px] sm:leading-5 xl:text-xl xl:leading-[35px] ">
          Start now →
        </button>
      </div>
    </section>
  )
}

export default FirstPage
