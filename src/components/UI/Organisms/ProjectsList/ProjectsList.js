import { FileSearchOutlined } from "@ant-design/icons";
import ProjectCard from "../../Molecules/ProjectCard";
import styles from "./ProjectsList.module.css";

const ProjectsList = ({projectsList, updateProject}) => {

    if(projectsList?.length === 0 ) {
        return (
            <div className = {styles.noTicketFound}>
                <FileSearchOutlined className = {styles.icon} />
                <span className = {styles.span1}>No projects found</span>
                <span className = {styles.span2}>Try adjusting your search to find what you're looking for</span>
            </div>
        )
    }

    return (
        <div className = {styles.projectsPreviewContainer}>
             <div className = {styles.title}>
                    <span>My Projects</span>
            </div>
            <div className = {styles.projectListContainer}>
                {projectsList.map(projectInfo => <ProjectCard updateProject = {updateProject} key = {projectInfo.id} projectInfo = {projectInfo}/>)}
            </div>
        </div>
    )
}

export default ProjectsList;