import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"

const AuthRedirect = (props) => {
    const {user} = useAuth();
    if(user) {
        return <Navigate to = "/dashboard"/>
    }

    return props.children
}

export default AuthRedirect;
