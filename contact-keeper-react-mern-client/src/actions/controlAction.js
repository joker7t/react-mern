import { LOADING_APP } from "./type";

export const setIsLoading = isLoading => dispatch => {
    dispatch({
        type: LOADING_APP,
        payload: isLoading
    });
};