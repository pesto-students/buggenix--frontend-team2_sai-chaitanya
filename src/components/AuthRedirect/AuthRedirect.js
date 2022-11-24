import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"

const AuthRedirect = (props) => {
    const {user} = useAuth();
    if(user) {
        return <Navigate to = "/dashboard/metrics"/>
    }

    return props.children
}

export default AuthRedirect;
