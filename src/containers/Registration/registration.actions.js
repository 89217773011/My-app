import { SET_LOGIN } from './../../const';

export const setLogin = (login) => {
    return { type: SET_LOGIN, login }
};
