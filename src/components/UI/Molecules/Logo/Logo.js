import styles from "./Logo.module.css";
import mainLogo from "../../../../assets/ladybug.png";

const Logo = ({hideTxt}) => {
    return (
            <div className = {styles.logo}>
                <img alt = "logo" className= {styles.logoImage} style = {styles} src = {mainLogo} />
                {!hideTxt && <span>Buggenix</span>}
            </div>
    )
}

export default Logo;