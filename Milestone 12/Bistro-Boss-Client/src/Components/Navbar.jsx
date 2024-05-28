import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [cart] = useCart();

  const { user, logOut, loading } = useContext(AuthContext);
  if (loading) {
    return "loading pppp";
  }
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <Link to={"/our-menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>

      {/* <li>
        <Link to={'/register'} >Sign Up</Link>
      </li> */}
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
          <li>
            <Link to={"/dashboard/cart"}>
              <button className="btn">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-30 right-0 left-0 text-white opacity-50 bg-black">
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
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
