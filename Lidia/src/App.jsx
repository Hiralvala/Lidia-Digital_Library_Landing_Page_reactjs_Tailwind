import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FirstPage from './components/FirstPage'
import Cover from './components/Cover'
import Features from './components/Features'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import Login from './components/Login'
import Register from './components/Register'

function App() {
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

      {/* <Login/> */}
      {/* <Register/> */}

      
    </>
  )
}

export default App
