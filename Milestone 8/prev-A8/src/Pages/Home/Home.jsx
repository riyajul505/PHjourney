import { useState } from "react";
import Banner from "./Banner";
import CategoryList from "./CategoryList";


const Home = () => {
    // const {donationData, isLoading} = useDonationData();
    const [value, setValue] = useState('');
    
    return (
        <div className="mx-auto max-w-screen-xl px-6 py-3">
            <Banner setValue={setValue} />
            <CategoryList value={value}/>

        </div>
    );
};

export default Home;