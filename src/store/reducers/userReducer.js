import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions"

const initState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
}

export const userReducer = (state = initState, action) => {
    
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                loged: false
            }

        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                token: action.payload.token,
                error: null,
                loged: true,
            }

        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                token: null,
                error: action.payload.error,
                loged: false
            }

        default:
            return state
    }
}