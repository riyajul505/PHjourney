import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return 'loading..........'
    }
    if (user){
        return children
    }
    return <Navigate state={{from:location}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;