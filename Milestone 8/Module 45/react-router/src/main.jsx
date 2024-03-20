import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Header from './Components/Header.jsx';
import ShowDetailsUser from './Components/ShowDetailsUser.jsx';
import Users from './Components/Users.jsx';
import './index.css';
import ErrorPage from './Components/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path:'/users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <ShowDetailsUser></ShowDetailsUser>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
