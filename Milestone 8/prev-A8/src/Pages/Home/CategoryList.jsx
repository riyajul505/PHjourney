import useDonationData from "../../Hooks/useDonationData";
import CardForCategory from "./CardForCategory";

const CategoryList = () => {
    const {donationData, isLoading} = useDonationData();
    
    return (
        <div className="grid grid-cols-3 mt-10 gap-6">
            {
                donationData.map( (Data, idx) => <CardForCategory data={Data} key={idx} /> )
            }
        </div>
    );
};

export default CategoryList;