import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import imgFeature from '../../assets/home/featured.jpg'
import '../../index.css'

const Featured = () => {
    return (
        <div className='feature-item bg-fixed'>
            <SectionTitle subHeading='Check it Out' heading='Featured Item' />
            <div className='flex justify-center items-center py-10 px-16 gap-5'>
            <div className=''>
                <div><img src={imgFeature} alt="" /></div>
            </div>
            <div>
                <h1>March 20</h1>
                <h2>Where can i get some?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias maiores magni dicta sunt vitae quia incidunt cupiditate at enim, eum dolor esse quibusdam nisi id aspernatur quas? Minus, delectus.</p>
                <button className='btn btn-outline'>Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;