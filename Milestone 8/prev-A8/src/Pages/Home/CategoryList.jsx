import useDonationData from "../../Hooks/useDonationData";
import CardForCategory from "./CardForCategory";

const CategoryList = ({value}) => {
    const {donationData, isLoading} = useDonationData();
    const newData = donationData.filter(i =>  (i.category) == value);
    console.log(newData);
    
    return (
        <div className="grid grid-cols-3 mt-10 gap-6">
            {
                newData.map( (Data, idx) => <CardForCategory data={Data} key={idx} /> )
            }
        </div>
    );
};

export default CategoryList;