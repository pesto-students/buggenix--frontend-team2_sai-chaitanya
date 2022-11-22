import React, { useEffect, useState } from 'react';
import styles from "./PeopleContainer.module.css";
import {
    DeleteFilled
} from '@ant-design/icons';
import { axiosPrivate } from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const { Button, Input, Modal } = require("antd");


const PeopleContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("false");
    const axiosPrivate = useAxiosPrivate();
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        axiosPrivate.get("users").then(res => {
            const {data} = res || {};
            const {team} = data || {};
            setPeople(team);
        })
    }, [])

    const openModel = () => {
        setIsModalOpen(true);
    }

    const handleCancel = ()  => {
        setIsModalOpen(false);
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    
    const handleOk = () => {
        const valid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if(!valid) {
            setEmailError("Please enter valid email");
        } else {
            //make api call

            setIsModalOpen(false);
            setEmailError("");


            axiosPrivate.post("users", {to: email}).then(res => {
                console.log(res);
            }).catch(err => {
                //twitter is mandatory if success 200. If handle is not there? 403
                console.log("Socials failed");
            })

            
            //make the api call

        }

    }

    const {memberCount = 2} = props;

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
                <Button onClick = {openModel} style = {{
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
                        <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
                    </tr>
                    <tr>
                        <td>Tarun</td>
                        <td>contact@tarun.com</td>
                        <td>Admin</td>
                        <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
                    </tr>
                    <tr>
                        <td>Anj</td>
                        <td>contact@anj.com</td>
                        <td>Admin</td>
                        <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
                    </tr>
                    <tr>
                        <td>Harsha</td>
                        <td>contact@harsha.com</td>
                        <td>Admin</td>
                        <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
                    </tr>
                </table>
            </div>
            <Modal title="Invite team members" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div style = {{padding: "1rem 0"}}>Email address</div>
                <Input onChange={handleChange} placeholder='Add the email of the person you want to invite'/>
                {emailError && <div style = {{color: "red", fontSize: "smaller"}}>{emailError}</div>}
            </Modal>
        </div>
    )


}

// class PeopleContainer extends React.Component {

//     constructor(props) {
//         super(props);
//         this.openModel = this.openModel.bind(this);
//         this.state = {
//             isModalOpen: false, 
//             email: "", 
//             emailError: ""
//         }
//         // this.handleOk = this.handleOk.bind(this);
//         this.handleCancel = this.handleCancel.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     openModel() {
//         this.setState({
//             isModalOpen: true
//         })
//     }


//     handleOk(email) {
//         const valid = String(email)
//         .toLowerCase()
//         .match(
//           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );

//         if(!valid) {
//             this.setState({
//                 emailError: "Please enter valid email"
//             })
//         } else {
//             //make api call
//             this.setState({
//                 isModalOpen: false, 
//                 emailError: ""
//             }, () => {
//                 //make the api call
//                 // axiosPrivate()
//             })
//         }

//     }

//     handleCancel() {
//         this.setState({
//             isModalOpen: false
//         })
//     }

//     handleChange(e) {
//         const {value} = e.target;
        
//         this.setState({
//             email: value
//         })
//     }

//     render() {

//         const {memberCount = 2} = this.props;
//         const {isModalOpen, emailError, email} = this.state;

//         return (
//             <div className= {styles.container}>
//                 <div style = {{
//                     "font-size": "15px",
//                     "font-weight": "500", 
//                     padding: "12px 0",
//                 }}>Manage team</div>

//                 <div style = {{
//                     "font-size": "10px",
//                     "font-weight": "300", 
//                     padding: "12px 0"
//                 }}> Team members <span style = {{fontSize: "12px", fontWeight: "bold"}}>{memberCount} / 25</span></div>

//                 <div className= {styles.search}>
//                     <Input style = {{
//                         marginRight: "5rem"
//                     }} placeholder="Search" enterButton="Search"/>
//                     <Button onClick = {this.openModel} style = {{
//                         background: "#1D5BD4", 
//                         color: "white", 
//                         border: "none"
//                         }}>Add users</Button>
//                 </div>
//                 <div className= {styles.userList}> 
//                     <table className = {styles.tableContainer} >
//                         <thead>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Account role</th>
//                         </thead>

//                         <tr>
//                             <td>Aditya</td>
//                             <td>contact@aditya.com</td>
//                             <td>Super admin</td>
//                             <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
//                         </tr>
//                         <tr>
//                             <td>Tarun</td>
//                             <td>contact@tarun.com</td>
//                             <td>Admin</td>
//                             <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
//                         </tr>
//                         <tr>
//                             <td>Anj</td>
//                             <td>contact@anj.com</td>
//                             <td>Admin</td>
//                             <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
//                         </tr>
//                         <tr>
//                             <td>Harsha</td>
//                             <td>contact@harsha.com</td>
//                             <td>Admin</td>
//                             <td><DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/></td>
//                         </tr>
//                     </table>
//                 </div>
//                 <Modal title="Invite team members" open={isModalOpen} onOk={this.handleOk.bind(this, email)} onCancel={this.handleCancel}>
//                     <div style = {{padding: "1rem 0"}}>Email address</div>
//                     <Input onChange={this.handleChange} placeholder='Add the email of the person you want to invite'/>
//                     {emailError && <div style = {{color: "red", fontSize: "smaller"}}>{emailError}</div>}
//                 </Modal>
//             </div>
//         )
//     }
// }

export default PeopleContainer;



