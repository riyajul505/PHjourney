import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";

import Link from "./Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/products", name: "Products" },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
        {
            open === true ? <MdRestaurantMenu></MdRestaurantMenu> : <CiMenuFries></CiMenuFries>
        }
        
      </div>
      <ul className={`md:flex md:static ${open? 'top-6':'-top-60'} duration-1000 absolute`}>
        {routes.map((routes) => (
          <Link key={routes.id} routes={routes}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
