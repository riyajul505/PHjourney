import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-5'>
            <p className='text-xl text-[#D99904]'>----{subHeading}------</p>
            <h1 className='text-4xl border-y-2 border-black'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;