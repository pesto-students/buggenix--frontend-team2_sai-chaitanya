import React, { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import styles from "./Project.module.css";
import { Button, Input} from 'antd';
import ModalComponent from '../Modal/Modal.js';
import CardComponent from '../Card/Card.js'


const Project = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className= {styles.project}>
                <SideMenu/>
                <div className={styles.dashboard}>
                    <span>Projects</span>
                    <div style = {{display: 'flex',paddingTop:"20px",}}>
                        <Input placeholder='Search' style = {{width: "45%"}}/>
                        <Button style = {{borderRadius: "5px", backgroundColor: "#4238F2", fontSize: "smaller",marginLeft:"20px"}} type='primary' onClick={()=>setModalOpen(true)}>Create project</Button>
                    </div>
                    <div className={styles.cards}>
                        <CardComponent/>    
                        <CardComponent/>    
                        <CardComponent/>    
                        <CardComponent/>    
                        <CardComponent/>    
                        <CardComponent/> 
                    </div>   
                    {modalOpen && <ModalComponent modalState={modalOpen} setModalState={setModalOpen}/>}
                </div>
            </div>
        </>
    )
}

export default Project