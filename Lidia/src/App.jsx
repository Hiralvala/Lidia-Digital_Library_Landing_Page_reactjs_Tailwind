import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FirstPage from './components/FirstPage'
import Cover from './components/Cover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-[120px] pt-[70px] box-border overflow-x-hidden'>
      <Navbar/>
      <FirstPage/>
      <Cover/>
    </div>
  )
}

export default App
