import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducers } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducers,
        filterState: filterReducer,

        userState: userReducer
    }
)