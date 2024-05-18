import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;