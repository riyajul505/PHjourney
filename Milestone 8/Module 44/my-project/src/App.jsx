import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PriceGym from './Components/PriceGym'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>
      <PriceGym></PriceGym>
      
    </>
  )
}

export default App
