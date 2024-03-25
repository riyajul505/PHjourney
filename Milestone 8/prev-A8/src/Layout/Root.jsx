import React from 'react';
import { Outlet } from 'react-router-dom';
import { FooterWithSitemap } from '../Components/FooterWithSitemap.jsx';
import { NavbarSimple } from '../Components/NavbarSimple.jsx';

const Root = () => {
    return (
        <div>
            <NavbarSimple> </NavbarSimple>
            <div className='mx-auto max-w-screen-xl px-6'>
                <Outlet></Outlet>
            </div>
            <FooterWithSitemap/>
        </div>
    );
};

export default Root;