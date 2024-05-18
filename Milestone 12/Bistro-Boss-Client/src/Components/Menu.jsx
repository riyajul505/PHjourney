import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = ({ item, link }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mt-16 mb-16">
        {item.map((i) => (
          <MenuItem key={i._id} item={i}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${link}`}><button className="btn btn-outline">Order Now {link}</button></Link>
    </div>
  );
};

export default Menu;
