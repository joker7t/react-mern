import { CREATE_USER } from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            return action.payload;

        default:
            return state;
    }
}