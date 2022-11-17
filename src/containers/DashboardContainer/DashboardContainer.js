import PeopleContainer from "../PeopleContainer/PeopleContainer";
import React from 'react';
import styles from "./DashboardContainer.module.css";

class DashboardContainer extends React.Component {
    render() {
        return (
            <div className= {styles.container}>
                <div className= {styles.nav}></div>
                <PeopleContainer/>
            </div>
        )
    }
}

export default DashboardContainer;