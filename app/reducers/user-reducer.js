
import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN,
    RECEIVE_LOGIN_FAILED,
    REQUEST_LOGIN_ERROR,
    LOGOUT
} from '../actions/user-actions'

const initialState = {
    user: undefined,
    isLoading: false,
    error: undefined
}

const userReducer = function (state = initialState, action) {
    //console.log('userReducer called with ', state, action)
    let newState
    switch (action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, { user: undefined, error: undefined, isLoading: true })
        case RECEIVE_LOGIN:
            return Object.assign({}, state, { user: action.user, error: undefined, isLoading: false })
        case RECEIVE_LOGIN_FAILED:
             return Object.assign({}, state, { user: undefined, error: action.error, isLoading: false })
        case REQUEST_LOGIN_ERROR:
            return Object.assign({}, state, { user: undefined, error: action.error, isLoading: false })
        case LOGOUT:
            return Object.assign({}, state, { user: undefined, error: undefined, isLoading: false })
        default:
            return state
    }
}

export default userReducer