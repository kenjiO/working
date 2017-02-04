import {
    AUTHENTICATE_USER,
    INCREMENT,
    ADD
} from './actions'

export const rootReducer = function(state = {counter: 1}, action) {
    let newState

    switch (action.type) {
        case INCREMENT:
            newState = Object.assign({}, state, {counter: state.counter + 1})
            console.log ('    newState is ', newState)
            return newState;
        case ADD:
            newState = Object.assign({}, state, {counter: action.value})
            console.log ('    newState is ', newState)
            return newState;          
        default:
            return state
    } 

}