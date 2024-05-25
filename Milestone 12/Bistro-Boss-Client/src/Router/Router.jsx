import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import AllUsers from "../Pages/Dashboard/All users/AllUsers";
import Cart from "../Pages/Dashboard/Cart/Cart";
import DashBoard from "../Pages/Dashboard/Layout/DashBoard";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import Order from '../Pages/Order/Order';
import OurMenu from "../Pages/OurMenu/OurMenu";
import Register from "../Pages/Register/Register";
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <></>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/our-menu',
          element: <OurMenu/>
        },
        {
          path: '/order/:category',
          element: <Order/>,
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashBoard/></PrivateRoute> ,
      children: [
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path:'users',
          element: <AllUsers/>
        }
      ]
    }
  ]);


export default router;