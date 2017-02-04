import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const RECEIVE_LOGIN_FAILED = 'RECEIVE_LOGIN_FAILED'
export const REQUEST_LOGIN_ERROR = 'REQUEST_LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

export const login = (username, password) => (dispatch, getState) => {
    dispatch(requestLoginActionCreator())

    let URL = 'https://food-bank-app-demo.herokuapp.com/auth/signin'
    URL = 'https://jsonplaceholder.typicode.com/posts'
    URL = 'http://demo5602050.mockable.io/d'

    axios.post(URL, {user: username, password: password})
        .then(function (res) {
            dispatch(receiveLoginActionCreator(res.data))
            
        })
        .catch(function (err) {
            if (err.response && err.response.status && err.response.status === 401) {
                dispatch({type: RECEIVE_LOGIN_FAILED, error: err.response.data.msg })
            } else {
                dispatch({type: REQUEST_LOGIN_ERROR, error: err.message })
            }
        });    
}

export const logout = () => (dispatch, getState) => {
    dispatch({type: LOGOUT})
}

function requestLoginActionCreator() {
    return {type: REQUEST_LOGIN}
}

function receiveLoginActionCreator(user) {
    return {type: RECEIVE_LOGIN, user}
}