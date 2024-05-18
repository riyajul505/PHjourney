import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover';
import Menu from '../../Components/Menu';
import SectionTitle from '../../Components/SectionTitle';
import useMenu from '../../Hooks/useMenu';
import menuBg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert');
    const soup = menu.filter(item => item.category == 'soup');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const offered = menu.filter(item => item.category == 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover heading="Our Menu" img={menuBg}/>
            <SectionTitle subHeading={'Dont miss'} heading={'Todays Offer'} />
            <Menu item={offered} link={'drinks'}/>

            <Cover heading={'Desserts'} img={dessertImg}/>
            <Menu item={dessert} link={'dessert'} />

            <Cover heading={'Pizza'} img={pizzaImg} />
            <Menu item={pizza} link={'pizza'}  />

            <Cover heading={'Salad'} img={saladImg} />
            <Menu item={salad} link={'salad'} />

            <Cover heading={'Soup'} img={soupImg}/>
            <Menu item={soup} link={'soup'}/>
            
        </div>
    );
};

export default OurMenu;