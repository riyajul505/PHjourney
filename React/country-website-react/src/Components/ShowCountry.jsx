import { useState } from 'react';
import './ShowCountry.css';

const ShowCountry = ({country, handleVisitedCountry}) => {
    const{name,flags, population, cca3} = country;
    console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);
    return (
        <div className={`box ${visited && 'visited'}`}>
            <h2 style={{color: visited? 'red':'black'}}>Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <h3>Code: {cca3}</h3>
            <img src={flags.png} alt="" srcSet="" />
            <button onClick={()=>{handleVisit();handleVisitedCountry(name.common)} } >{visited? 'Visited' : 'Not Visited'}</button>

        </div>
    );
};

export default ShowCountry;