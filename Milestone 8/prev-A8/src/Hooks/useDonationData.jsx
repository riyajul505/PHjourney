import { useEffect, useState } from "react";

const useDonationData = () => {
  const [donationData, setDonationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch('/data.json')
   .then(res => res.json())
   .then(data => {setDonationData(data); setIsLoading(false);});
  },[])
  return {donationData, isLoading};
};

export default useDonationData;
