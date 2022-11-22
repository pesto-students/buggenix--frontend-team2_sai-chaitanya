import { Modal } from "antd";
import React from "react";
import styles from "./ProjectsContainer.module.css";
import InputField from "../../components/UI/Atoms/Input";
import SimpleButton from "../../components/UI/Atoms/SimpleButton";
import ProjectsList from "../../components/UI/Organisms/ProjectsList";
import CreateProjectModal from "../../components/UI/Organisms/CreateProjectModal";
import { filterProjects } from "../../utils/filterProjects";

class ProjectsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false, 
            searchStr: ""
        }
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }


    showModal() {
        this.setState({
            isModalOpen: true
        })
    }

    handleOk = () => {
        this.setState({
            isModalOpen: false
        })
    };

    render() {

        const {projectsList} = this.props;
        const {isModalOpen, searchStr} = this.state;

        const _filteredList = filterProjects(projectsList);

        return (
            <div className = {styles.container}>
                <div style = {{
                    margin: "6px 0"
                }}>Projects </div>
                <div style = {{
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "space-between"
                }}>
                    <div style = {{
                        minWidth: "28rem",
                    }}>
                        <InputField placeholder={"Search and filter projects"}/>   
                    </div>
                    <div style = {{
                        transform: "translateX(-100%)"
                    }}>
                        <SimpleButton onClick = {this.showModal} fontSize={"smaller"} txtColor={"white"} bgColor={"#2A5BED"} btnText={"Create project"}  />
                    </div>
                </div>
                <Modal title="Create a project" open={isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <CreateProjectModal /> 
                    {/* Ask Aditya the modal Ant code */}
                </Modal>
                <ProjectsList projectsList = {projectsList}/>
            </div>
        )
    }
}

export default ProjectsContainer;

ProjectsContainer.defaultProps = {
    projectsList: [
        {
            id: 1, 
            name: "Atonis", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Harsha", 
                role: "admin"
            }, 
            createdTime: "Oct 17, 2022"
        }, 
        {
            id: 2, 
            name: "Ink high", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Raghul", 
                role: "admin"
            },             createdTime: "Oct 17, 2022"
        }, 
        {
            id: 3, 
            name: "MedEasy", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Harish", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022"
        }, 
        {
            id: 4, 
            name: "Pharma", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Aditya", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022"
        }, 
        {
            id: 5, 
            name: "IDC", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Anjali", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022"
        }, 
        {
            id: 6, 
            name: "IDM", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Tharun", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022"
        }, 
    ]
}

