import { Navigate, Outlet } from 'react-router-dom';
import { auth } from './../../firebase';

const PrivateRoute = () => {
    let authToken;

    try {
        authToken = auth.currentUser.accessToken;
    } catch (error) {
        authToken = false;
    }

    return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
