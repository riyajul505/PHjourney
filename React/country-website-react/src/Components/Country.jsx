import React, { useEffect, useState } from 'react';
import ShowCountry from './ShowCountry';
import './ShowCountry.css';
const Country = () => {
    const [allCountryData, setCountry] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[]);
    const handleVisitedCountry = nameOfVisited =>{
        const listOfVisited =[...visitedCountry, nameOfVisited];
        setVisitedCountry(listOfVisited);
    }
    return (
        <div>
            <h1>This is country Details {allCountryData.length}</h1>
            <p>I've Visited: {visitedCountry.length} </p>
            <ul>
                {
                    visitedCountry.map(names => <li>{names}</li>)
                }
            </ul>
            <div className='country-container'>
                {
                    allCountryData.map(oneCountry => <ShowCountry handleVisitedCountry={handleVisitedCountry} key={oneCountry.cca3} country={oneCountry}></ShowCountry>)
                }
            </div>
            
        </div>
    );
};

export default Country;