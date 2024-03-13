import { useState } from 'react';
import './App.css';
import Player from './player';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    alert('button clicked');
  }
  const sum = num => {
    alert(num+5);
  }
  return (
    <>
      
      <h1>React Core concept</h1>
      <Player></Player>
      {/* <Counter></Counter> */}
      {/* <button onClick={()=>{
        handleClick();
      }}>Click Me</button>
      <button onClick={()=>{
        sum(4);
      }}>Sum</button> */}
     
     
    </>
  )
}

export default App
