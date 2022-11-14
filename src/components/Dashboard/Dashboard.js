import {OktaAuth}  from '@okta/okta-auth-js';
import { oktaConfig } from "../../config/oktaConfig";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Link,useNavigate } from "react-router-dom";


const Dashboard = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const logOut =()=>{
        axiosPrivate.get("api/auth/logout").then((res)=>{
            console.log("83",res)
            localStorage.removeItem("access_token")
            navigate("/");
        })
    }
    return (
        <div>
            <button  onClick={logOut}>logout</button>
        </div>
    )
}

export default Dashboard;