import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const combinedReducers = combineReducers({
    account: accountReducer
});

export default combinedReducers;