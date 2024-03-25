import Banner from "./Banner";
import CategoryList from "./CategoryList";


const Home = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-6 py-3">
            <Banner/>
            <CategoryList/>

        </div>
    );
};

export default Home;