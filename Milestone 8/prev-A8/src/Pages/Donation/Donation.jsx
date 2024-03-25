import React, { useState } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import DonationCard from './DonationCard';

const Donation = () => {
    const {localData} = useLocalStorage();
    console.log('this is your data', localData);
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll);
    }
    return (
        <div className='grid grid-cols-2'>
            {
                localData.slice(0,showAll ? localData.length : 4).map(item => <DonationCard data={item} key={item.id}/>)
            }
            <button className={`btn btn-primary ${showAll ? 'hidden' : ''}`} onClick={handleShowAll}>Show All</button>
        </div>
    );
};

export default Donation;