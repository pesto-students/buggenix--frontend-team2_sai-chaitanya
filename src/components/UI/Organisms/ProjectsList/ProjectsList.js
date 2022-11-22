import ProjectCard from "../../Molecules/ProjectCard";
import styles from "./Projects.module.css";

const ProjectsList = ({projectsList}) => {
    return (
        <div id = {styles.projectsListContainer}>
            {projectsList.map(projectInfo => <ProjectCard key = {projectInfo.id} projectInfo = {projectInfo}/>)}
        </div>
    )
}

export default ProjectsList;