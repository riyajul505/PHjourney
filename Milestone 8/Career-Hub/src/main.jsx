import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import Root from './Components/Root.jsx';
import AppliedJobs from './Components/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import JobDetails from './Components/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/jobs/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json'),
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
