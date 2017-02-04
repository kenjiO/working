import React from 'react'
import { connect } from 'react-redux'
import { addAction } from '../actions/counter-actions'

const AddContainer = ({dispatch}) => {
    let input

    return (
        <div style={{ border: "1px solid gray", margin: '5px', width: '200px', padding: '10px' }}>
            Add Container<br />
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addAction(parseInt(input.value)))
                input.value = ''
            }}>
                <input ref={node => {input = node} } />
                <button type="submit"> Add </button>
            </form>
        </div>
    )
}

const connectedAddContainer = connect()(AddContainer)

export default connectedAddContainer