import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";

const FoodCard = ({ item }) => {
  const [,refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { image, price, recipe, name, _id } = item;
  const { user } = useContext(AuthContext);
  const handleAddToCart = (food) => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        price,
        image,
        name,
      };
      axiosSecure.post("/cart", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Added to the cart");
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-blue-gray-900 text-white ">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(item)}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
