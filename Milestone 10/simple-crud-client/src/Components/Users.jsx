import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted the id");
        }
      });
  };
  return (
    <div>
      {users.map((i) => (
        <p key={i._id}>
          {i.name} : {i.email}: {i._id} <Link to={`/users/${i._id}`}><button>Update</button></Link>
          <button onClick={() => handleDelete(i._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
