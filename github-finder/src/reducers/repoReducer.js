import { LOAD_REPO } from "../actions/type";

const initialState = {
    repos: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_REPO:
            return {
                ...state,
                repos: action.payload
            };

        default:
            return state;
    }
}