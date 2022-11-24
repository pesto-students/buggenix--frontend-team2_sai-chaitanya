import React, { useEffect, useState } from 'react';
import styles from "./PeopleContainer.module.css";
import {
    DeleteFilled
} from '@ant-design/icons';
// import { axiosPrivate } from '../../api/axios';
import { connect } from 'react-redux';
import { filterUsers } from '../../utils/filterUsers';
import { addUser, deleteUser, fetchUsers } from '../../actionCreators/usersActions';
import axiosPrivate from '../../api/axiosPrivate';

import { Button, Input, Modal, Popconfirm, message } from "antd"
import UserItem from '../../components/UI/Molecules/UserItem';


const PeopleContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("false");
    const [searchStr, setSearchStr] = useState("");


    const handleUserDelete = (id) => {

        const {deleteUser} = props;

        deleteUser(id).then(res => {
            if(res) {
                message.success('User deleted');
            } else {
                message.error("Error occured while deleting user")
            }
            console.log(res, "deleted?")
        });

    };

    useEffect(() => {
        const {fetchUsers} = props;
        fetchUsers();  
    }, []);

    const openModel = () => {
        setIsModalOpen(true);
    }

    const closeModal = ()  => {
        setIsModalOpen(false);
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    const handleSearchStrChange = (e) => {
        const {value} = e.target;
        setSearchStr(value);
    }
 
    
    const handleOk = () => {

        const {addUser} = props;
        const valid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if(!valid) {
            setEmailError("Please enter valid email");
        } else {
            //make api call

            setEmailError("");
            
            //add user
            addUser(email).then(res => {
                if(res) {
                    
                    setIsModalOpen(false);
                    //success
                } else {
                    setEmailError("Please enter valid email");
                }
            }); //action dispatch
            
            // axiosPrivate.post("users", {to: email}).then(res => {
            //     console.log(res);
            //     setEmail("");
            // }).catch(err => {
            //     //twitter is mandatory if success 200. If handle is not there? 403
            //     console.log("Socials failed");
            // })
            
            //make the api call
        }
    }

    const {people} = props;;
    const _peopleList = filterUsers(people, searchStr);

    return (
        <div className= {styles.container}>
            <div style = {{
                fontSize: "15px",
                fontWeight: "500", 
                padding: "12px 0",
            }}>Manage team</div>

            <div style = {{
                fontSize: "10px",
                fontWeight: "300", 
                padding: "12px 0"
            }}> Team members <span style = {{fontSize: "12px", fontWeight: "bold"}}>{people.length} / 25</span></div>

            <div className= {styles.search}>
                <Input style = {{
                    marginRight: "5rem", 
                }}  onChange = {handleSearchStrChange}
                placeholder="Search" enterbutton ="Search"/>
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
                    <tbody>
                        {
                            _peopleList.length > 0 ? _peopleList.map(person => {
                                const {username, email, role, _id: id, status} = person || {};
                                return <UserItem username={username} email = {email} role = {role} status = {status}  id = {id} onClick = {handleUserDelete}/>
                            }) : <span>No user found</span>
                        }
                    </tbody>
                </table>
            </div>
            <Modal title="Invite team members" open={isModalOpen} onOk={handleOk} onCancel={closeModal}>
                <div style = {{padding: "1rem 0"}}>Email address</div>
                <Input onChange={handleChange} placeholder='Add the email of the person you want to invite'/>
                {emailError && <div style = {{color: "red", fontSize: "smaller"}}>{emailError}</div>}
            </Modal>
        </div>
    )
}


const mapStateToProps = (state) => {
    const {users} = state;
    const {usersList} = users  || {};
    return {
        people: usersList
    }
}

export default connect(mapStateToProps, {fetchUsers, deleteUser, addUser})(PeopleContainer);

PeopleContainer.defaultProps = {
    people: [
        {
            id: "1", 
            email: "h@gmail.com", 
            name: "Harish", 
            role: "admin", 
        },
        {
            id: "2", 
            email: "a@gmail.com", 
            name: "Aditya", 
            role: "member", 
        },
        {
            id: "3", 
            email: "a@gmail.com", 
            name: "Anjali", 
            role: "member", 
        },
        {
            id: "4", 
            email: "r@gmail.com", 
            name: "Raghul", 
            role: "admin", 
        },
    ]
}



