import { RootState } from "../features/store" 
import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


interface PrivateRouteProps{
    children:JSX.Element
   
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;