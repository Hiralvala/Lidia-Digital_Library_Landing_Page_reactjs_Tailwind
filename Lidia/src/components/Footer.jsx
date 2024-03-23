import React from 'react'
import LogoText from '../assets/LogoText.svg'
import SocialMedia from '../assets/SocialMedia.svg'

const Footer = () => {
  return (
    <section className="mt-14  flex items-center justify-center">
        <div className='grid grid-rows-3 gap-5 ss:grid-cols-3 ss:gap-12 smd:gap-20 lgx:gap-24 xl:gap-28 ss:grid-rows-1 font-plus'>
            <div className='flex justify-center flex-col items-center '>
                <p className='my-2 lg:text-lg lgx:text-xl'>Managed By</p>
                <img src={LogoText} className='w-[110px] h-auto object-contain'/>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <p className='my-2 lg:text-lg lgx:text-xl'>Social Media</p>
                <img src={SocialMedia} className='w-[110px] h-auto object-contain'/>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <p className='my-2 lg:text-lg lgx:text-xl'>Slogan</p>
                <p className='lg:text-lg lgx:text-xl'>#RentFavBooks</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
