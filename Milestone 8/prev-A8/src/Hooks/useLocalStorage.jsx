import { useEffect, useState } from 'react';
import { loadFromLocalStorage } from '../Utils/localStorage';

const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);
    useEffect(()=>{setLocalData(loadFromLocalStorage())},[]);
    return (
        {localData}
    );
};

export default useLocalStorage;