import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                item.map(item => <FoodCard key={item._id} item={item}/>)
            }
        </div>
    );
};

export default OrderTab;