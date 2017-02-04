import React from 'react'
import { connect } from 'react-redux'
import { addAction } from './actions'

let AddContainer = ({dispatch}) => {
    let input

    return (
        <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
            return
            }
            dispatch(addAction(parseInt(input.value)))
            input.value = ''
        }}>
            <input ref={node => {
            input = node
            }} />
            <button type="submit">
            Add Todo
            </button>
        </form>
        </div>
    )
}

AddContainer = connect()(AddContainer)
export default AddContainer