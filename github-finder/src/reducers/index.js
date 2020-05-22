import { combineReducers } from "redux";
import userReducer from "./userReducer";
import controlReducer from "./controlReducer";

export default combineReducers({
    user: userReducer,
    control: controlReducer
});