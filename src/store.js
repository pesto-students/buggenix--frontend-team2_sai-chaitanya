import {createStore, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from './reducers/usersReducer';
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';
import TicketsReducer from './reducers/TicketsReducer';

const rootReducer = combineReducers({
    users: usersReducer, 
    tickets: TicketsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //insert reducers in this

export default store;
