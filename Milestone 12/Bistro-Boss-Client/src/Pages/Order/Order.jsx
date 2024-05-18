import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Components/Cover";
import OrderTab from "../../Components/OrderTab";
import useMenu from "../../Hooks/useMenu";
import orderImg from "../../assets/shop/banner2.jpg";

const Order = () => {
    const categories = ['salad', 'pizza', 'dessert','soup', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert');
    const soup = menu.filter(item => item.category == 'soup');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const drinks = menu.filter(item => item.category == 'drinks');
  return (
    <div>
        <Helmet>
            <title>Order Food | Bistro Boss</title>
        </Helmet>
      <Cover img={orderImg} heading={"Order Now"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Sadal</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab item={salad}/>
        </TabPanel>
        <TabPanel><OrderTab item={salad}/></TabPanel>
        <TabPanel><OrderTab item={pizza}/></TabPanel>
        <TabPanel><OrderTab item={dessert}/></TabPanel>
        <TabPanel><OrderTab item={soup}/></TabPanel>
        <TabPanel><OrderTab item={drinks}/></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
