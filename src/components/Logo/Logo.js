import styles from "./Logo.module.css";
import mainLogo from "../../assets/ladybug.png";
import { Link, NavLink } from "react-router-dom";


const Logo = () => {
    return (
            <div className = {styles.logo}>
                <img alt = "logo" className= {styles.logoImage} style = {styles} src = {mainLogo} />
                <span>Buggenix</span>
            </div>
    )
}

export default Logo;