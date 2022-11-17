import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';


const Dashboard = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const {logout}  = useAuth();


    const handleLogin = () => {
        axiosPrivate.get("api/auth/logout").then((res)=>{
            localStorage.removeItem("access_token");
            logout();
            navigate("/login");
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>logout</button>
        </div>
    )
}

export default Dashboard;