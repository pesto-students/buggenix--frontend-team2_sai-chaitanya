import React,{ useState } from 'react';
import { Input,Modal,Button } from 'antd';
import mainLogo from '../../assets/ladybug.png';
import modalImg from '../../assets/modalImg.png'
import styles from "./Modal.module.css";

const ModalComponent = ({modalState,setModalState}) => {
    const [modalOpen, setModalOpen] = useState(modalState);
    const okHandler = () =>{
        setModalOpen(false);
        setModalState(false);
    }
    const onCancelHandler = ()=>{
        setModalOpen(false);
        setModalState(false);
    }
    return (
            <Modal
                title={<img alt = "logo" src = {mainLogo} style={{height: 35}}/>}
                open={modalOpen}
                onOk={() => okHandler()}
                onCancel={() => onCancelHandler()}
                bodyStyle={{
                    height:500,
                }}
                width={850}
                footer={null}
            >
                <div className={styles.modal}>
                    <div className={styles.modalInput}>
                        <h2>Create New Project</h2>
                        <Input placeholder='Project Name' style = {{width: "75%"}}/>
                        <Input placeholder='Project Description' style = {{width: "75%"}}/>
                        <Button style = {{borderRadius: "5px", backgroundColor: "#4238F2", fontSize: "smaller",margin:"8px 25px",width:"75%"}} type='primary' onClick={()=>okHandler()}>Create project</Button>
                    </div>
                    <div className={styles.modalInfo}>
                        <img alt = "logo" src = {modalImg} style={{height: 100}}/>
                        <p>
                            Buggenix empowers countless<br/>
                            software teams to collect, <br/>
                            manage, and resolve visual <br/>
                            feedback directly from their <br/>
                            users.<br/>

                            <span>Say hello to building better products.</span><br/>

                            Say hello to <span>buggenix.</span>
                        </p>
                    </div>
                </div>
            </Modal>
        )
}

export default ModalComponent