import authReducer from './authReducer';
import projectReducer from './projectRreducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;