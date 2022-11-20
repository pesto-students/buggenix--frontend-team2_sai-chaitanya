import React from 'react';
import styles from "./DashboardContainer.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { PieChartOutlined, RocketOutlined, TagOutlined, TeamOutlined, ContactsOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import Logo from '../../UI/Molecules/Logo/Logo';


class DashboardContainer extends React.Component {
    

    render() {
        return (
            <div className= {styles.container}>
                {/* <Logo/> */}
                <nav className= {styles.nav}>
                    <div className= {styles.navTop}>
                        <NavLink to = "metrics">
                            <div className = {styles.navItem}>
                                <PieChartOutlined />
                                <span>Metrics</span>
                            </div>
                            </NavLink>     
                        <NavLink to = "projects">
                            <div className = {styles.navItem}>
                                <RocketOutlined />
                                <span>Projects</span>
                            </div>
                        </NavLink>    
                        <NavLink to = "tickets">
                            <div className = {styles.navItem}> 
                                <TagOutlined />
                                <span>Tickets</span>
                            </div>    
                        </NavLink>    
                    </div>
                    <div className= {styles.navBottom}>
                        <NavLink to = "people">
                            <div className= {styles.navItem}>
                                <TeamOutlined />
                                <span>People</span>
                            </div>
                        </NavLink>    
                        <NavLink to = "account">
                            <div className = {styles.navItem}>
                                <ContactsOutlined />
                                <span>Account</span>
                            </div>
                        </NavLink>    
                    </div>
                    {/* <NavLink to = "account">Account</NavLink>     */}
                </nav> 
                {/* Style the above nav bar completely */}
                <Outlet />
            </div>
        )
    }
}

export default DashboardContainer;