import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Root = () => {
    return (
        <div className='container mx-auto px-5'>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;