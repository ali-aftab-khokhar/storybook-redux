import todoList from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoList
})

export default rootReducer