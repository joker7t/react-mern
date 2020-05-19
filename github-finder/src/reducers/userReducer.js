import { LOAD_USER } from "../actions/type";

const initialState = {
    users: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
}