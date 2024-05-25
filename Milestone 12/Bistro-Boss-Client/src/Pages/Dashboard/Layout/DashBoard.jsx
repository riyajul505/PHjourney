import React from "react";
import { BiFork } from "react-icons/bi";
import {
  FaAddressBook,
  FaBookOpen,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaMoneyBill,
  FaUser
} from "react-icons/fa";
import { FaCalendarCheck, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 px-4">
        <ul className="menu space-y-5 mt-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/admin-home"}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/add-items"}>
                  <BiFork /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-items"}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-bookings"}>
                  <FaBookOpen /> Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUser /> ALL Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/payment-history"}>
                  <FaMoneyBill /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaCartShopping /> My Cart ({cart.length})
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashboard/add-review"}>
                  <FaAddressBook /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/my-bookings"}>
                  <FaCalendarCheck /> My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaList />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
