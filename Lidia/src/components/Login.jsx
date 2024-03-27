import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='flex flex-col justify-center items-center font-plus'>

        <img src={logo} alt="" className='w-[80px] my-10 md:w-[100px] '/>


        <div className='shadow-2xl rounded-md px-8 pt-8 pb-4 border-t-2 border-t-primary md:px-[45px] md:pt-12 md:pb-8'>
          
            <p className='text-paragraph md:text-base text-sm'><Link className='active:text-primary text-primary' to='/'>Home</Link> / <a className='active:text-primary '>Login</a></p>


            <h1 className='mt-4 font-semibold text-base md:text-lg '>Login</h1>
            <p className='text-paragraph text-xs md:text-[13px] mt-1 '>Input your username and password.</p>

            <h2 className='mt-4 font-semibold text-[15px] md:text-[16px] '>Username</h2>
            <input type="text" className='focus:border-primary focus:outline-none border pl-2 w-full rounded-md py-2 md:py-1.5 mt-1 focus:border-2 text-xs' placeholder='Enter Your Name'/>

            <h2 className='mt-3 font-semibold text-[15px] md:text-[16px]'>Password</h2>
            <input type="password" name="" id="" className='border-border border pl-2 w-full rounded-md py-2 mt-1 md:py-1.5 focus:border-primary focus:outline-none focus:border-2 text-xs' placeholder='e.g. 4kuBu7uhM3dk1t'/>

            <button className='bg-primary text-white w-full py-1.5 rounded-md mt-5 text-base'>Login</button>
        </div>
        <p className='text-paragraph mt-10 md:text-base text-xs'>Don’t have an account? <Link className='text-primary' to='/register'>Create one!</Link></p>
        <p className='text-paragraph m-4 md:text-base text-xs'>© 2024 Lidia. All rights reserved.</p>

    </section>
  )
}

export default Login
