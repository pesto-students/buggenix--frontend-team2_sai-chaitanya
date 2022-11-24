import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const RequireAuth = (props) => {

    const {user} = useAuth();

    if(!user) {
        return <Navigate to = "/login"/>
    }

    return <>{props.children}</>
}

export default RequireAuth;