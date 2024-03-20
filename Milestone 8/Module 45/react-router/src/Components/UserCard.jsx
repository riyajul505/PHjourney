import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const { id, name, email, username } = data;
  const navigat = useNavigate();
  
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          Email: {email} <br /> Username: {username}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/users/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default UserCard;
