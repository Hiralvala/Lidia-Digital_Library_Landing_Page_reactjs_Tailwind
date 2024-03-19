import React from 'react'
import '../index.css'
// import {DompetAyahSepatuLbu, TalkingToStranger, TheMidNightLibrary, TheVisualMba} from '../assets'
import DompetAyahSepatuLbu from '../assets/DompetAyahSepatuLbu.svg'
import TalkingToStranger from '../assets/TalkingToStrangers.svg'
import TheMidNightLibrary from '../assets/TheMidnightLibrary.svg'
import TheVisualMba from '../assets/TheVisualMba.svg' 


const FirstPage = () => {
  return (
    <section className='flex  '>
      <div className='basis-[600px] mt-7'>
        <h1 className='font-plus font-extrabold text-[76px] leading-[89px]'>
            Search & review <br/> your <span className='text-primary underline'>fav book </span>effortlessly
        </h1>
        <p className='font-plus font-normal text-base leading-[30px] text-paragraph max-w-[501px] my-5'>
        Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where you can effortlessly search your favorite books.✨
        </p>
        <div className="w-[200px]  h-[60px]">
            <button className="bg-primary py-[17.5px] px-[56px] rounded-[10px] btn w-auto h-full">
                <p className="text-white font-plus font-bold text-base leading-[25px]">Start now →</p>
        </button>
      </div>
      </div>
      <div className='basis-[600px] z-[3]'>
        
            <img src={DompetAyahSepatuLbu} alt="photo1" className='w-[209px] h-[302px] absolute top-[371px] left-[720px] rounded-[10px]'/>
            <img src={TalkingToStranger} alt="photo2" className='w-[143px] h-[214px] absolute top-[167px] left-[956px] rounded-[10px]'/>
            <img src={TheVisualMba} alt="photo3" className='w-[108px] h-[163px] absolute top-[520px] left-[1028px] rounded-[10px]'/>
            <img src={TheMidNightLibrary} alt="photo4" className='w-[150px] h-[288px] absolute top-[287px] left-[1170px] rounded-[10px]'/>

        
      </div>
      
    </section>
  )
}

export default FirstPage
