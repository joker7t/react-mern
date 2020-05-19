import { LOAD_USER } from "./type";

export const loadUsers = users => dispatch => {
    dispatch({
        type: LOAD_USER,
        payload: users
    });

};