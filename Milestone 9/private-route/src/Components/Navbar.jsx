import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() => console.log('log out successfully'))
    .catch(error => console.error(error))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Private route</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/sign-in'}>Sign in</NavLink>
          </li>
          <li>
            <NavLink to={'sign-up'}>Sign up</NavLink>
          </li>
          {
            user && <li><NavLink to={'/orders'}>Orders</NavLink></li>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span>{user.email}</span> 
            <a onClick={handleLogOut} className="btn">Sign Out</a>
          </> 
          
          : <Link to={"/sign-in"}>Sign in too</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
