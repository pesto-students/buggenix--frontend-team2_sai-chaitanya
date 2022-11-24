import {createStore, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from './reducers/usersReducer';
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';

const rootReducer = combineReducers({
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //insert reducers in this

export default store;
