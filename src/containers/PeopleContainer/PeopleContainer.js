import React, { useEffect, useState } from 'react';
import styles from "./PeopleContainer.module.css";
import {
    DeleteFilled, PlusCircleFilled
} from '@ant-design/icons';
// import { axiosPrivate } from '../../api/axios';
import { connect } from 'react-redux';
import { filterUsers } from '../../utils/filterUsers';
import { addUser, deleteUser, fetchUsers } from '../../actionCreators/usersActions';
import axiosPrivate from '../../api/axiosPrivate';

import { Button, Input, Modal, Popconfirm, message, Table } from "antd"
import UserItem from '../../components/UI/Molecules/UserItem';
import { rolesAndResponsibilities } from '../../data/roles';
const { Search } = Input;


const PeopleContainer = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [roleKey, setRoleKey] = useState();
    const [emailError, setEmailError] = useState(false);
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
            render: (text) => <a>{text}</a>,
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

    const data = [ 
        {
        key: '1',
        name: 'Dwight Shrute',
        email: "Dwight.shrute@outlook.com", 
        role: "Super admin"
      },
      {
        key: '2',
        name: 'Michael Scoot',
        email: "michael.scott@gmail.com", 
        role: "Admin"
      }, 
      {
        key: "3", 
        name: "Pam Beesly", 
        email: "Pam.beesly@gmail.com", 
        role: "member"
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
                        <Button onClick={openModel} className = {styles.btn}> <PlusCircleFilled/> Invite Member</Button>
                    </form>
                    <div className = {styles.tableContainer}>
                        <Table columns = {columns} dataSource = {formattedPeopleList} />
                    </div>
                </div>
            </main>
                <Modal title="Invite Members" open={isModalOpen} onOk={handleOk} onCancel={closeModal}>
                    <div className = {styles.inv}>Send invitation to: </div>
                    <Input className = {styles.addEmailInput} size = "large" onChange={handleEmailChange} placeholder='Add the email of the person you want to invite'/>
                    {emailError && <div style = {{color: "red", fontSize: "smaller"}}>{emailError}</div>}
                    <div className = {styles.inv}>Member role: </div>
                    <div className = {styles.roles}>
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
        // people: usersList
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



// return (
//     <div className= {styles.container}>
//         <div style = {{
//             fontSize: "15px",
//             fontWeight: "500", 
//             padding: "12px 0",
//         }}>Manage team</div>

//         <div style = {{
//             fontSize: "10px",
//             fontWeight: "300", 
//             padding: "12px 0"
//         }}> Team members <span style = {{fontSize: "12px", fontWeight: "bold"}}>{people.length} / 25</span></div>

//         <div className= {styles.search}>
//             <Input style = {{
//                 marginRight: "5rem", 
//             }}  onChange = {handleSearchStrChange}
//             placeholder="Search" enterbutton ="Search"/>
//             <Button onClick = {openModel} style = {{
//                 background: "#1D5BD4", 
//                 color: "white", 
//                 border: "none"
//                 }}>Add users</Button>
//         </div>
//         <div className= {styles.userList}> 
//             <table className = {styles.tableContainer} >
//                 <thead>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Account role</th>
//                 </thead>
//                 <tbody>
//                     {
//                         _peopleList.length > 0 ? _peopleList.map(person => {
//                             const {username, email, role, _id: id, status} = person || {};
//                             return <UserItem username={username} email = {email} role = {role} status = {status}  id = {id} onClick = {handleUserDelete}/>
//                         }) : <span>No user found</span>
//                     }
//                 </tbody>
//             </table>
//         </div>

//     </div>
// )