import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => { 
    const savedData = JSON.parse(localStorage.getItem('donation')) || []; 
    console.log(savedData, 'eta hocche saved data local storage er');

    const checkExisting = savedData.find(item => item.id == data.id);

    if (!checkExisting) {
        savedData.push(data);
        console.log(savedData, 'eta hocche pushed data');
        localStorage.setItem('donation', JSON.stringify(savedData));
    } else {
        toast.warning('data already saved');
    }
}


export const loadFromLocalStorage = () => {
    const savedData = JSON.parse(localStorage.getItem('donation')) || [];

    return savedData;
}