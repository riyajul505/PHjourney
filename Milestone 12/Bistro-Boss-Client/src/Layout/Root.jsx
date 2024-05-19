import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div className='container mx-auto'>
            {!noHeaderFooter && <Navbar/>}
            <Outlet/>
            {!noHeaderFooter && <Footer/>}
        </div>
    );
};

export default Root;