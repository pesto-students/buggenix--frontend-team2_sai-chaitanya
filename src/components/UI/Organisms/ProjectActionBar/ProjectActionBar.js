import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, message } from 'antd';
import { useState } from "react";
import styles from "./ProjectActionBar.module.css";

const ProjectActionBar = ({onChange, searchStr}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectError, setProjectErr] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
      setIsModalOpen(true);
    };

    const success = () => {
      messageApi.open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 1,
      })

      setTimeout(() => {
        setIsModalOpen(false);
        setProjectErr("");
        setProjectName("");
        setProjectDescription("");
        }, 2000);
    };

    const handleOk = () => {
        if(!projectName || !projectDescription) {
            setProjectErr("Enter valid name and description");
        } else {
            success();
           
        
        }
    };

    const handleChange = (e) => {
        const {name: type, value} = e.target;
        if(type === "search") {
            onChange(value);
        } else if(type === "name") {
            setProjectName(value);
        } else if(type === "description") {
            setProjectDescription(value);
        } else {
            console.log("")
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className = {styles.ticket_action_bar}>
            {contextHolder}
            <div className = {styles.search}>
                <form className = {styles.form}>
                    <SearchOutlined/>
                    <input placeholder = "Search projects" name = "search" value = {searchStr} onChange={handleChange} maxLength = "100"/>
                </form>
            </div>
            <div className = {styles.actions}>
                <Button onClick={showModal} className = {styles.btn}><PlusOutlined/>Create project</Button>
            </div>
            <Modal title="Create project" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form onChange={handleChange}>
                    <div className = {styles.inv}>Project name </div>
                    <Input name = "name" value = {projectName} className = {styles.addEmailInput} size = "large" placeholder='Add name'/>
                    <div className = {styles.inv}>Project description </div>
                    <Input name = "description" value = {projectDescription} className = {styles.addEmailInput} size = "large" placeholder='Add description'/>
                    <div style = {{color: "red"}}>{projectError}</div>
                </form>
            </Modal>


        </div>
    )
}

export default ProjectActionBar;