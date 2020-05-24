import { LOAD_REPO } from "./type";

export const loadRepo = repos => dispatch => {
    dispatch({
        type: LOAD_REPO,
        payload: repos
    });
};
