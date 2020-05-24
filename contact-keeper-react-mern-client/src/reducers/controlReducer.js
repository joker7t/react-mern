import { LOADING_APP } from "../actions/type";

const initialState = {
    isLoading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_APP:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
}