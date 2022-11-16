import React from 'react';
import styles from './SideMenu.module.css';
import mainLogo from '../../assets/ladybug.png';
import metricLogo from '../../assets/metric.png';
import projectLogo from "../../assets/project.png";
import ticketLogo from "../../assets/tickets.png";
import peopleLogo from "../../assets/people.png";
import accountLogo from "../../assets/account.png";
import logoutLogo from "../../assets/logout.png";
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className= {styles.nav}>
        <div>
            <img alt = "logo" src = {mainLogo} />
        </div>
        <div className={styles.navItems}>
            <div className={styles.firstNavItem}>
                <div>
                    <img src={metricLogo} style={{height: 18}}/>
                    <Link to = "/dashboard"><span className={styles.itemName}>Metrics</span></Link>
                </div>
                <div>
                    <img src={projectLogo} style={{height: 18}}/>
                    <Link to = "/project"><span className={styles.itemName}>Projects</span></Link>
                </div>
                <div>
                    <img src={ticketLogo} style={{height: 18}}/>
                    <Link to = "/"> <span className={styles.itemName}>Tickets</span></Link>
                </div>
            </div>
            <div className={styles.secondNavItem}>
                <div>
                    <img src={peopleLogo} style={{height: 22}} />
                    <Link to = "/"><span className={styles.itemName}>People</span></Link>
                </div>
                <div>
                    <img src={accountLogo} style={{height: 18}} />
                    <Link to = "/"><span className={styles.itemName}>Account</span></Link>
                </div>
                <div>
                    <img src={logoutLogo} style={{height: 18}} />
                    <Link to = "/"><span className={styles.itemName}>Logout</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu