import React, { useEffect, useState } from "react";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  const deleteItem = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/deleteCoffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          fetch("http://localhost:5000/coffees")
            .then((res) => res.json())
            .then((data) => setCoffees(data));
        }
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div>
      {coffees.length}
      {coffees.map((i, idx) => (
        <li onClick={() => deleteItem(i._id)} className="gap-5 flex" key={idx}>
          {i.name} {i.quantity} X
        </li>
      ))}
    </div>
  );
};

export default Home;
