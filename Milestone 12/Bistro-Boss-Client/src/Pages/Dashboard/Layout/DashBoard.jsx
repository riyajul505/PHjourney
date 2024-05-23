import React from 'react';
import { FaAddressBook, FaCalendar, FaHome, FaMoneyBill } from 'react-icons/fa';
import { FaCalendarCheck, FaCartShopping } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400 px-4'>
                <ul className="menu space-y-5 mt-2">
                    <li>
                        <NavLink to={'/dashboard/userHome'}>
                            <FaHome/> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/payment-history'}>
                            <FaMoneyBill/> Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <FaCalendar/> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}>
                            <FaCartShopping/> My Cart
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to={'/dashboard/add-review'}>
                            <FaAddressBook/> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/my-bookings'}>
                            <FaCalendarCheck/> My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome/>Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashBoard;