import axiosPrivate from "../api/axiosPrivate";
import { UDPATE_SELECTED_PROJECT } from "../constants/user";

export const fetchProjects = () => {
    return function(dispatch) {
        dispatch(fetchProjectsRequest());
        return axiosPrivate.get("projects").then(res => {
            const {data} = res || {};
            dispatch(fetchProjectsSuccess(data));
            return true
        }).catch(err => {
            dispatch(fetchProjectsFailure(err));
            return false;
        })
    }
}

export const updateProject = (id) => {
    return {
        type: UDPATE_SELECTED_PROJECT, 
        payload: id
    }   
}


export const addProject = (data) => {
    return function(dispatch) {
        
        dispatch(addProjectRequest());
        axiosPrivate.post("projects", data).then(res => {
            const { data } = res || {};
            
            dispatch(addProjectSuccess(data));
            return true;
        }).catch(err => {
            dispatch(addProjectFailure(err));
            return false;
        })
    }
}


// PROJECT


const addProjectRequest = () => {
    return {
        type: "ADD_PROJECT_REQUEST"
    }
}

const addProjectSuccess = (payload) => {
    return {
        type: "ADD_PROJECT_SUCCESS", 
        payload
    }
}

const addProjectFailure = (payload) => {
    return {
        type: "ADD_PROJECT_FAILURE", 
        payload
    }
}



// PROJECTS


const fetchProjectsRequest = () => {
    return {
        type: "FETCH_PROJECTS_REQUEST"
    }
}

const fetchProjectsSuccess = (payload) => {
    return {
        type: "FETCH_PROJECTS_SUCCESS", 
        payload
    }
}

const fetchProjectsFailure = (err) => {
    return {
        type: "FETCH_PROJECTS_FAILURE", 
        payload: err
    }
}   