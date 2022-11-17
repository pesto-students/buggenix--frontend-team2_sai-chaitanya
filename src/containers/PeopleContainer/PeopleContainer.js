import React from 'react';
import styles from "./PeopleContainer.module.css";
import {
    DeleteFilled
} from '@ant-design/icons';
const { Button, Input, Modal } = require("antd");
class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.openModel = this.openModel.bind(this);
        this.state = {
            isModalOpen: false
        }
    }

    openModel() {
        this.setState({
            isModalOpen: true
        })
    }

    handleOk(value) {
        console.log(value, "value");
        console.log("Email submitted");
    }

    handleCancel() {
        this.setState({
            isModalOpen: false
        })
    }

    render() {

        const {memberCount = 2} = this.props;
        const {isModalOpen} = this.state;

        return (
            <div className= {styles.container}>
                <div style = {{
                    "font-size": "15px",
                    "font-weight": "500", 
                    padding: "12px 0",
                }}>Manage team</div>

                <div style = {{
                    "font-size": "10px",
                    "font-weight": "300", 
                    padding: "12px 0"
                }}> Team members <span style = {{fontSize: "12px", fontWeight: "bold"}}>{memberCount} / 25</span></div>

                <div className= {styles.search}>
                    <Input style = {{
                        marginRight: "5rem"
                    }} placeholder="Search" enterButton="Search"/>
                    <Button onClick = {this.openModel} style = {{
                        background: "#1D5BD4", 
                        color: "white", 
                        border: "none"
                        }}>Add users</Button>
                </div>
                <div className= {styles.userList}> 
                    <table className = {styles.tableContainer} >
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account role</th>
                        </thead>

                        <tr>
                            <td>Aditya</td>
                            <td>contact@aditya.com</td>
                            <td>Super admin</td>
                            <td><DeleteFilled style = {{color: "#1D5BD4"}}/></td>
                        </tr>
                        <tr>
                            <td>Tarun</td>
                            <td>contact@tarun.com</td>
                            <td>Admin</td>
                            <td><DeleteFilled style = {{color: "#1D5BD4"}}/></td>
                        </tr>
                        <tr>
                            <td>Anj</td>
                            <td>contact@anj.com</td>
                            <td>Admin</td>
                            <td><DeleteFilled style = {{color: "#1D5BD4"}}/></td>
                        </tr>
                        <tr>
                            <td>Harsha</td>
                            <td>contact@harsha.com</td>
                            <td>Admin</td>
                            <td><DeleteFilled style = {{color: "#1D5BD4"}}/></td>
                        </tr>
                    </table>
                </div>
                <Modal title="Invite team members" open={isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <div style = {{padding: "1rem 0"}}>Email address</div>
                    <Input placeholder='Add the email of the person you want to invite'/>
                </Modal>
            </div>
        )
    }
}

export default PeopleContainer;

