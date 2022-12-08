import React from "react";

import ProjectsList from "../../components/UI/Organisms/ProjectsList";
import { filterProjects } from "../../utils/filterProjects";
import ProjectActionBar from "../../components/UI/Organisms/ProjectActionBar";
import { addProject, fetchProjects, updateProject } from "../../actionCreators/projectActions";
import {connect} from "react-redux";

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

    componentDidMount() {
        const {fetchProjects} = this.props;
        fetchProjects && fetchProjects();
    }


    render() {

        const {projectsList, addProject, updateProject} = this.props;
        const {searchStr} = this.state;
        
        const _filteredList = filterProjects(projectsList, searchStr);

        return (
            <>
                <ProjectActionBar addProject = {addProject} onChange = {this.handleChange}/>
                <ProjectsList updateProject = {updateProject} projectsList = {_filteredList}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    const projectsList = state?.projects?.projectsList || [];

    return {
        projectsList
    }
}

export default connect(mapStateToProps, {fetchProjects, addProject, updateProject})(ProjectsContainer);

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

