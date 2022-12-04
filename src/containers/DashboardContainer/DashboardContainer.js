import React from 'react';
import styles from "./DashboardContainer.module.css";
import { Outlet } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';
import Logo from '../../components/UI/Molecules/Logo/Logo';
import NavItem from '../../components/UI/Molecules/NavItem';
import { message, Popconfirm } from 'antd';
import { authContext } from '../../context/authContext';



class DashboardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navList: [
                {
                    iconName: "PieChartOutlined", 
                    to: "metrics", 
                    value: "Metrics", 
                    isSelected: true
                }, 
                {
                    iconName: "RocketOutlined", 
                    to: "projects", 
                    value: "Projects", 
                    isSelected: false
                }, 
                {
                    iconName: "TagOutlined", 
                    to: "tickets", 
                    value: "Tickets", 
                    isSelected: false
                }, 
                {
                    iconName: "TeamOutlined", 
                    to: "people", 
                    value: "People", 
                    isSelected: false
                }, 
                {
                    iconName: "ContactsOutlined", 
                    to: "account", 
                    value: "Account", 
                    isSelected: false
                }
            ] 
        }

        this.handleNavChange = this.handleNavChange.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    confirm = (e) => {
        let {logout} = this.context;
        logout();
        message.success('Successfully logged out');
      };

    handleNavChange(to) {
        const {navList:prevList} = this.state;
        const newList =  prevList.map(navInfo => {
            if(navInfo.to === to) {
                return {
                    ...navInfo, 
                    isSelected: true
                }
            } else {
                return {
                    ...navInfo, 
                    isSelected: false
                }
            }
        })

        this.setState({
            navList: newList
        })
    }

    render() {

        const {navList} = this.state;
        return (
            <div className= {styles.container}>
                <nav className = {styles.navContainer}>
                    <div className = {styles.logo}>
                        <Logo hideTxt = {true}/>
                    </div>
                    <div className = {styles.pagemenu}>
                        {navList.map(navInfo => {
                            const {iconName, to, value, isSelected} = navInfo || {};
                            return <NavItem key = {value} iconName={iconName} to = {to} value = {value} isSelected = {isSelected} onClick = {this.handleNavChange}/>
                        })}
                    </div>
                    <div className = {styles.navBottom}> 
                        <div className = {styles.account_actions}>
                            <div className = {styles.trial_expiry_reminder}>
                                Trial expires in  <b> 14 days</b>
                            </div>
                            <button className = {styles.success + " " + styles.tiny + " " + styles.account_upgrade}>
                                UPGRADE
                            </button>
                            <div className = {styles.logoutBtn}>  
                                <div className = {styles.logout}>
                                <Popconfirm
                                    title="Are you sure to delete this task?"
                                    onConfirm={this.confirm}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    {/* <a href="#">Delete</a> */}
                                    <LogoutOutlined  size= "large" className = {styles.deleteIcon}/>
                                </Popconfirm>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className = {styles.fullScroll}>
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default DashboardContainer;

DashboardContainer.contextType = authContext;