import { LOAD_USER, GET_SELECTED_USER } from "./type";

export const loadUsers = users => dispatch => {
    dispatch({
        type: LOAD_USER,
        payload: users
    });
};

export const setSelectedUser = user => dispatch => {
    dispatch({
        type: GET_SELECTED_USER,
        payload: user
    });

};