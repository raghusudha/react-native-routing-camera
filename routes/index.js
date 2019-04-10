import React  from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Products from  "../pages/Products";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Invoice from "../pages/Invoice";


const Route=createStackNavigator(
    {
      Home:Home,
      Products:Products,
      Invoice:Invoice,
      Cart:Cart
     },
    {

        initialRouteName:"Home"
    }
);

const RouterConfig=createAppContainer(Route);

export default RouterConfig;