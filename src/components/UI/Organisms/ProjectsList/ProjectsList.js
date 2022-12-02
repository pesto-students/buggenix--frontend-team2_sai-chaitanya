import ProjectCard from "../../Molecules/ProjectCard";
import styles from "./ProjectsList.module.css";

const ProjectsList = ({projectsList, updateProject}) => {
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