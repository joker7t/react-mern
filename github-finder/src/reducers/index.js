import { combineReducers } from "redux";
import userReducer from "./userReducer";
import controlReducer from "./controlReducer";
import repoReducer from "./repoReducer";

export default combineReducers({
    user: userReducer,
    control: controlReducer,
    repo: repoReducer
});