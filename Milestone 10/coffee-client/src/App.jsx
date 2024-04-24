import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <>
      <div className='gap-3 flex '>
        <NavLink to='/updateCoffee'>Update Coffee</NavLink>
        <NavLink to='/addCoffee'>Add Coffee</NavLink>
        <NavLink to='/'>Home</NavLink>
      </div>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
