import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Update from './Components/Update.jsx';
import Users from './Components/Users.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/users',
    element: <Users/>,
    loader: ()=> fetch('http://localhost:5000/users')
  },
  {
    path:'/users/:id',
    element:<Update/>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
