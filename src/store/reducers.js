import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { registrationReducer } from './../containers/Registration/registration.reducer';

export const rootReducer = combineReducers({
    registrationReducer,
    routerReducer
});
