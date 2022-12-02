import { UDPATE_SELECTED_PROJECT } from "../constants/user"

const initialState = {
    projectsList: [], 
    isLoading: false, 
    error: "", 
    selectedProject: "all"
}

export const projectsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "FETCH_PROJECTS_REQUEST": {
            return {
                ...state, 
                isLoading: true
            }
        }
        case "FETCH_PROJECTS_SUCCESS": {
            return {
                ...state, 
                isLoading: false, 
                projectsList: payload
            }
        }
        case "FETCH_PROJECTS_FAILURE": {
            return {
                ...state,
                isLoading: false, 
                error: payload
            }
        }

        case "ADD_PROJECT_REQUEST": {
            return {
                ...state, 
                isLoading: true
            }
        }

        case "ADD_PROJECT_SUCCESS": {
            const projectsList = [...state.projectsList];
            projectsList.push(payload);
            return {
                ...state, 
                projectsList
            }
        }

        case "ADD_PROJECT_FAILURE": {
            return {
                ...state, 
                err: payload
            }
        }

        case UDPATE_SELECTED_PROJECT: {
            return {
                ...state, 
                selectedProject: payload
            }
        }

        default: return state;
    }
}