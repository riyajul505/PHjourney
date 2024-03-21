import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PriceGym from './Components/PriceGym'
import 'animate.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Navbar></Navbar> */}
      <h1 className="animate__animated animate__bounce">Animate Style</h1>  
      {/* <PriceGym></PriceGym> */}
      
    </>
  )
}

export default App
