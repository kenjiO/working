
import {
    AUTHENTICATE_USER,
    REQUEST_USER,
    RECEIVE_USER,
    REQUEST_USER_ERROR
} from '../actions/user-actions'

const initialState = {
    user: {},
    isLoading: false
}

const userReducer = function(state = initialState, action) {
    //console.log('userReducer called with ', state, action)
    let newState

    switch (action.type) {
        case AUTHENTICATE_USER:
            //console.log('user-reducer AUTHENTICATE_USER case')
            newState = Object.assign({}, state, {user: "admin"})
            //console.log ('    newState is ', newState)
            return newState;
        case REQUEST_USER:
        console.log('requesting user...')
            newState = Object.assign({}, state, {user: undefined, error: undefined, isLoading: true})
            return newState;
        case RECEIVE_USER:
            return {user: action.user, error: undefined, isLoading: false}
        case REQUEST_USER_ERROR:
            console.log(4030000000032)
            console.dir(action)
            return {user: undefined, error: action.error, isLoading: false}
        default:
            return state
    } 
}

export default userReducer