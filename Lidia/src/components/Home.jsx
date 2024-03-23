import React from 'react'
import Navbar from './Navbar.jsx'
import FirstPage from './FirstPage.jsx'
import Cover from './Cover.jsx'
import Features from './Features.jsx'
import Services from './Services.jsx'
import Reviews from './Reviews.jsx'
import Location from './Location.jsx'
import Footer from './Footer.jsx'
import Copyright from './Copyright.jsx'

const Home = () => {
  return (
    <>
        <div className=' lg:mt-[50px] box-border overflow-hidden m-0 sm:mx-3 sm:mt-4 lg:mx-12'>
           <Navbar/>
           <FirstPage/>
           <Cover/>
           <Features/>
           <Services/>
           <Reviews/>
           <Location/>
           <Footer/>
         </div>
         <Copyright/>  
    </>
  )
}

export default Home
