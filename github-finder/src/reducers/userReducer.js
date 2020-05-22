import { LOAD_USER, GET_SELECTED_USER } from "../actions/type";

const initialState = {
    users: [],
    selectedUser: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                users: action.payload
            };
        case GET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            };

        default:
            return state;
    }
}