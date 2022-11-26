import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";
import { PieChartOutlined, RocketOutlined, TagOutlined, TeamOutlined, ContactsOutlined, LogoutOutlined } from '@ant-design/icons';


const iconSwitch = (iconName) => {
    switch(iconName) {
        case "PieChartOutlined": return <PieChartOutlined/>
        case "RocketOutlined": return <RocketOutlined/>
        case "TagOutlined": return <TagOutlined/>
        case "TeamOutlined": return <TeamOutlined/>
        case "ContactsOutlined": return <ContactsOutlined/>
    }
}

const NavItem = ({iconName, to, value, isSelected, onClick}) => {

    const handleClick = () => {
        onClick(to);
    }

    return (
        <NavLink onClick={handleClick} to = {to} className = {styles.navigation + " " + (isSelected && styles.selected)}>
            <span className = {styles.icon}>
                {iconSwitch(iconName)}
            </span>
            <span className = {styles.text}>{value}</span>
        </NavLink>
    )
}

export default NavItem;