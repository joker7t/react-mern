import { combineReducers } from "redux";
import controlReducer from "./controlReducer";

export default combineReducers({
    control: controlReducer
});