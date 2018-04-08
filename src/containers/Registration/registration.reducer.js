import { SET_LOGIN } from './../../const';

const initialState = {
    login: null
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.login
            }
        default:
            return state;
    };  
}; 