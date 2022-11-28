import { Modal } from "antd";
import React from "react";
import styles from "./ProjectsContainer.module.css";
import InputField from "../../components/UI/Atoms/Input";
import SimpleButton from "../../components/UI/Atoms/SimpleButton";
import ProjectsList from "../../components/UI/Organisms/ProjectsList";
import CreateProjectModal from "../../components/UI/Organisms/CreateProjectModal";
import { filterProjects } from "../../utils/filterProjects";
import ProjectActionBar from "../../components/UI/Organisms/ProjectActionBar";

class ProjectsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchStr: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(searchStr) {
        this.setState({
            searchStr
        })
    }


    render() {

        const {projectsList} = this.props;
        const {isModalOpen, searchStr} = this.state;

        const _filteredList = filterProjects(projectsList);

        return (
            <>
                <ProjectActionBar onChange = {this.handleChange}/>
                <ProjectsList projectsList = {projectsList}/>
            </>
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
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
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
            },  
             createdTime: "Oct 17, 2022", 
             members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
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
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
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
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
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
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
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
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
        }, 
    ]
}

