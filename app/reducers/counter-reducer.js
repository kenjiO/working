import {
    INCREMENT,
    ADD
} from '../actions/counter-actions'

const counterReducer = function(state = {counter: 1}, action) {
    // console.log('counterReducer called with ', state, action)
    let newState

    switch (action.type) {
        case INCREMENT:
            newState = Object.assign({}, state, {counter: state.counter + 1})
            // console.log ('    newState is ', newState)
            return newState;
        case ADD:
            newState = Object.assign({}, state, {counter: state.counter + action.value})
            // console.log ('    newState is ', newState)
            return newState;          
        default:
            return state
    } 
}

export default counterReducer