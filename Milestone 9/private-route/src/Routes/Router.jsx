import {
  createBrowserRouter
} from "react-router-dom";
import Orders from "../Components/Orders";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Root from "../Root/Root";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path:'/',
          element: <Home/>,
        },
        {
          path:'/sign-in',
          element: <Signin/>
        },
        {
          path: '/sign-up',
          element: <Signup/>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders/></PrivateRoute>,
        }
      ]
    },
  ]);

export default router;