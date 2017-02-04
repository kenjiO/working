import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import AddContainer from './AddContainer'
import { incrementAction } from '../actions/counter-actions'

let IncrementContainer = ({ onIncrementClick, counter }) => (
    <div style={{ border: "1px solid black", margin: '15px', width: '400px', padding: '10px' }}>
        IncrementContainer <br />
        {counter}<br />
        <button onClick={onIncrementClick}>Increment</button>< br />
        <AddContainer />
    </div>
)

IncrementContainer.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return { counter: state.counterData.counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => { dispatch(incrementAction()) }
    }
}

IncrementContainer = connect(mapStateToProps, mapDispatchToProps)(IncrementContainer)

export default IncrementContainer