import axios from 'axios';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const REQUEST_USER_ERROR = 'REQUEST_USER_ERROR'

export const authenticate = (username, password) => (dispatch, getState) => {
    console.log('user-actions.authenticate() ' ,username, password)
    dispatch(requestUserActionCreator())
    let URL = 'https://food-bank-app-demo.herokuapp.com/auth/signin'
    URL = 'https://jsonplaceholder.typicode.com/posts'

    axios.post(URL, {user: 'xx', id: 4})
        .then(function (res) {
            console.log('SUCCESS ', res.data)
            dispatch(receiveLoginActionCreator(res.data))
            
        })
        .catch(function (err) {
            console.log('ERRORx ', err)
            dispatch({type: REQUEST_USER_ERROR, error: err })
        });    
}

function requestUserActionCreator() {
    return {type: REQUEST_USER}
}

function receiveLoginActionCreator(user) {
    return {type: RECEIVE_USER, user}
}