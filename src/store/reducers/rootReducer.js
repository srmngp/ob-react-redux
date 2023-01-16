import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducers } from "./todosReducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducers,
        filterState: filterReducer
    }
)