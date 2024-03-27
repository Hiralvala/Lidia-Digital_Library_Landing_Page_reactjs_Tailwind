import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='flex flex-col justify-center items-center font-plus'>

        <img src={logo} alt="" className='w-[80px] my-10 md:w-[100px] '/>

        <div className='shadow-2xl rounded-md px-12 pt-8 pb-4 border-t-2 border-t-primary md:px-[55px] md:pt-12 md:pb-8'>
            <p className='text-paragraph md:text-base text-sm'><Link to="/" className='active:text-primary text-primary'>Home</Link> / <a href='' className='active:text-primary'>Sign-up</a></p>

            <h1 className='mt-4 font-semibold text-base md:text-lg'>Sign-up</h1>
            <p className='text-paragraph text-xs md:text-[13px] mt-1'>Register yourself to do something on Lidia.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-3 mt-7'>
                <div>
                    <h2  className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Full name</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs' placeholder='Muhammad Alfian'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-0.5 font-semibold text-[15px] md:text-[16px] '>NIK</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs' placeholder='e.g. 1050241708900001'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Username</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs' placeholder='e.g. alfianchii'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Email</h2>
                    <input type="email" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 pr-2 text-xs' placeholder='e.g. alfian.ganteng@gmail.com'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Phone</h2>
                    <input type="number" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs' placeholder='e.g. 082384763478'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Born</h2>
                    <input type="date" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 pr-2 text-xs' />
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Address</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 pr-2 text-xs' placeholder='e.g. JL. Free Fire Factory, No. 1, Kla Only'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] mb-1.5'>Gender</h2>
                    <input type="radio" name="gender" value="male" id="" className='mr-2 translate-y-0.5'/><span className='text-sm'> Male</span>
                    <input type="radio" name="gender" value="female" id="" className='mr-2 ml-3 translate-y-0.5 focus:'/><span className='text-sm'>Female</span>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Password</h2>
                    <input type="password" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[15px] md:text-[16px] '>Confirm Password</h2>
                    <input type="password" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs'/>
                </div>
                <button className='bg-primary text-white w-full py-1.5 rounded-md mt-2 text-base sm:col-span-2'>Sign-up</button>
            </div>
        </div>
        <p className='text-paragraph m-8 md:text-base text-xs'>© 2024 Lidia. All rights reserved.</p>
    </section>
  )
}

export default Register
