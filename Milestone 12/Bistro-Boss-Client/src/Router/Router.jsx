import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import Order from '../Pages/Order/Order';
import OurMenu from "../Pages/OurMenu/OurMenu";
import Register from "../Pages/Register/Register";


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
  ]);


export default router;