export const INCREMENT = 'INCREMENT'
export const ADD = 'ADD'

export const incrementAction = () => { return {type: INCREMENT} }

export const addAction = (x) => ({type: ADD, value: x})