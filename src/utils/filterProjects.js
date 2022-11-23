export const filterProjects = (projectsList, searchStr) => {
    return projectsList.filter(projectInfo => {
        const {name, description} = projectInfo || {};
        if(name.toLowerCase().indexOf(searchStr) !== -1 || description.toLowerCase().indexOf(searchStr) !== -1) {
            return true;
        } else {
            return false;
        }
    })
}


