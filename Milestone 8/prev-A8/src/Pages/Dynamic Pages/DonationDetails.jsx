import React from 'react';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDonationData from "../../Hooks/useDonationData";
import { saveToLocalStorage } from '../../Utils/localStorage';


const DonationDetails = () => {

    
    const {id} = useParams();
    const {donationData, isLoading} = useDonationData();
    const dataa = donationData.find(donation => donation.id == id);
    const {
        picture,
        title,
        category,
        category_bg,
        card_bg,
        text_button_bg,
        description,
        price,
      } = dataa || {};
      const handleToast = () => {
        toast('Donated Successfully');
        saveToLocalStorage(dataa);

    };
    return (
        <div className="mt-5 flex flex-col justify-center items-center space-y-4">
            <h1>{title}</h1>
            <button onClick={handleToast} className="btn ">Donate {price}</button>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;