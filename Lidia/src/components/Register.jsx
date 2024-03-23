import React from 'react'
import logo from '../assets/logo.png'

const Register = () => {
  return (
    <section className='flex flex-col justify-center items-center font-plus'>

        <img src={logo} alt="" className='w-[80px] my-10 md:w-[100px] '/>

        <div className='shadow-2xl rounded-md px-6 pt-8 pb-4 border-t-2 border-t-primary md:px-[55px] md:pt-12 md:pb-8'>
            <p className='text-paragraph md:text-lg'><a href="" className='active:text-primary'>Home</a> / <a href='' className='active:text-primary'>Sign-up</a></p>

            <h1 className='mt-4 font-semibold text-lg md:text-xl'>Sign-up</h1>
            <p className='text-paragraph text-base md:text-[17px] mt-1'>Register yourself to do something on Lidia.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-8 mt-7'>
                <div>
                    <h2  className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Full name</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 ' placeholder='Muhammad Alfian'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Nik</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 ' placeholder='e.g. 1050241708900001'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Username</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 ' placeholder='e.g. alfianchii'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Email</h2>
                    <input type="email" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 pr-2' placeholder='e.g. alfian.ganteng@gmail.com'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Phone</h2>
                    <input type="number" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 ' placeholder='e.g. 082384763478'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Born</h2>
                    <input type="date" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 pr-2' />
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Address</h2>
                    <input type="text" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 pr-2' placeholder='e.g. JL. Free Fire Factory, No. 1, Kla Only'/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] mb-1.5'>Gender</h2>
                    <input type="radio" name="gender" value="male" id="" className='mr-2 translate-y-0.5'/>Male
                    <input type="radio" name="gender" value="female" id="" className='mr-2 ml-3 translate-y-0.5 focus:'/>Female
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Password</h2>
                    <input type="password" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 '/>
                </div>
                <div>
                    <h2 className='mt-3 sm:mt-1 font-semibold text-[17px] md:text-[18px] '>Confirm Password</h2>
                    <input type="password" name="" id="" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-1 md:py-1.5 mt-1 focus:border-2 '/>
                </div>
                <button className='bg-primary text-white w-full py-1.5 rounded-md mt-5 text-lg sm:col-span-2'>Sign-up</button>
            </div>
        </div>
        <p className='text-paragraph m-8 md:text-lg'>© 2024 Lidia. All rights reserved.</p>
    </section>
  )
}

export default Register
