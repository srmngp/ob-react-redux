import { SET_VISIBILITY_FILTER } from "../actions/actions"

let initState = 'SHOW_ALL'

export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter
        default:
            return state
    }
}