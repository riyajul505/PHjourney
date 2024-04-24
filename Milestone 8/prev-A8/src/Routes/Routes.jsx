import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/Dynamic Pages/DonationDetails";
import Donation from "../Pages/Donation/Donation";

import Statistics from "../Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/donation",
          element: <Donation/>,
        },
        {
          path: "/donation-details/:id",
          element: <DonationDetails/>,
        },
        {
          path: "/statistics",
          element: <Statistics/>,
        },
        {
          path: "*",
          element: <ErrorPage/>,
        },
      ]
    },
    
  ]);

  export default router;