import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex gap-5">
      <div>
        <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
