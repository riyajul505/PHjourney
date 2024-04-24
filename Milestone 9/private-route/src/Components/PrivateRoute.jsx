import PropTypes from "prop-types";
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span>Loading...........</span>
    }
    if (user){
        return children;
    }
    return <Navigate to={'/'}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };