import React, { useEffect, useState } from 'react';
import styles from "./PeopleContainer.module.css";
import {
    DeleteFilled, PlusCircleFilled
} from '@ant-design/icons';
// import { axiosPrivate } from '../../api/axios';
import { connect } from 'react-redux';
import { filterUsers } from '../../utils/filterUsers';
import { addUser, deleteUser, fetchUsers } from '../../actionCreators/usersActions';
import { Button, Input, Modal, Popconfirm, message, Table } from "antd"
import { rolesAndResponsibilities } from '../../data/roles';
import { authContext, useAuth } from '../../context/authContext';

const { Search } = Input;


const PeopleContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [roleKey, setRoleKey] = useState();
    const [emailError, setEmailError] = useState(false);
    const [searchStr, setSearchStr] = useState("");
    const {user} = useAuth();

    const {role: userRole} = user || {};


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
        if(userRole !== "member") {
            setIsModalOpen(true);
        }
    }

    const closeModal = ()  => {
        setEmailError("");
        setIsModalOpen(false);
    }

    const handleEmailChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    const handleSearchStrChange = (e) => {
        const {value} = e.target;
        setSearchStr(value);
    }

    const handleSelectRole = (key) => {
        setRoleKey(key);
    }
 
    
    const handleSubmitInviteeEmail = () => {

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
            addUser({to: email, role: roleKey}).then(res => {
                if(res) {
                    
                    setIsModalOpen(false);
                    //success
                } else {
                    setEmailError("Please enter valid email");
                }
            }); //action dispatch
        }
    }

    const {people} = props;
    const _peopleList = filterUsers(people, searchStr);
    const formattedPeopleList = _peopleList.map(people => {
        return {
            ...people, 
            key: people.id
        }
    })

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (value) => <a>{!value ? <span style = {{color: "grey"}}>Invite pending</span> : value}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, 
        {
            title: "Role", 
            dataIndex: "role", 
            key: "role"
        }
    ]

    return (
        <section className = {styles.section}>
            <main>
                <div className = {styles.headers}>
                    <div>Manage Team</div>
                    <span>Manage who has access to this workspace</span>
                </div>
                <div className = {styles.mainSection}>
                    <div className = {styles.memberCount}>Members {"(" + formattedPeopleList?.length + ")"}</div>
                    <form className = {styles.searchForm}>
                        <Search onChange={handleSearchStrChange} size = "large" className = {styles.searchInput} style = {{width: 400}} placeholder = 'Search by name or email'/>
                        <Button onClick={openModel} className = {styles.btn + " " + (userRole === "member" && styles.disableBtn)}> <PlusCircleFilled/> Invite Member</Button>
                    </form>
                    <div className = {styles.tableContainer}>
                        <Table columns = {columns} dataSource = {formattedPeopleList} />
                    </div>
                </div>
            </main>
                <Modal title="Invite Members" open={isModalOpen} onOk={handleSubmitInviteeEmail} onCancel={closeModal}>
                    <div className = {styles.inv}>Send invitation to: </div>
                    <Input className = {styles.addEmailInput} size = "large" onChange={handleEmailChange} placeholder='Add the email of the person you want to invite'/>
                    {emailError && <div style = {{color: "red", fontSize: "smaller"}}>{emailError}</div>}
                    <div className = {styles.inv}>Member role: </div>
                    <div className = {styles.roles}>
                        <div onClick = {() => handleSelectRole("superAdmin")} className = {styles.roleItem + " " + styles.unselect}>
                            <h4>{"Super admin"}</h4>
                            <div className = {styles.info}>{"Manage hiring, people including and take ownership of the org"}</div>
                        </div>
                        {rolesAndResponsibilities.map(roleInfo => {
                            const {key, role, responsibility} = roleInfo || {};
                            const isSelected = roleKey == key;
                            return (
                                <div key = {key} onClick = {() => handleSelectRole(key)} className = {styles.roleItem + " " + (isSelected && styles.isSelected)}>
                                    <h4>{role}</h4>
                                    <div className = {styles.info}>{responsibility}</div>
                                </div>
                            )
                        })}
                    </div>
                </Modal>
        </section>
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
            email: "harish.balasubramanian@gmail.com", 
            name: "Harish", 
            role: "admin", 
        },
        {
            id: "2", 
            email: "aditya.vinayak@gmail.com", 
            name: "Aditya", 
            role: "member", 
        },
        {
            id: "3", 
            email: "anjali.raghunathan@gmail.com", 
            name: "Anjali", 
            role: "member", 
        },
        {
            id: "4", 
            email: "tarun.shakt@gmail.com", 
            name: "Raghul", 
            role: "admin", 
        },
    ]
}

