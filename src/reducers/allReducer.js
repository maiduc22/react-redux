import counter from "./counter";
import currentUser from "./currentuser";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter, currentUser
})

export default allReducer;