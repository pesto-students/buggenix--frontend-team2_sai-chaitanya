import { LogoutOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/authContext"

const LogoutBtn = () => {

    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div onClick={handleLogout}>
            <LogoutOutlined />
            <span>Logout</span>
        </div>
    )
}

export default LogoutBtn