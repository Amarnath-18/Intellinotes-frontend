import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

const AuthRoute = ({children}) => {

    const { isAuthenticated , loading } = useAuth();

    if(loading) {
        return <LoadingSpinner />
    }

    if(isAuthenticated) {
        return <Navigate to="/dashboard" replace />
    }


  return children;
}

export default AuthRoute