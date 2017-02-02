// Increment React Component

import React, { PropTypes } from 'react'

const IncrementComponent = ({ onIncrementClick, counter }) => (
    <div>
        Counter <br />
        {counter}<br />
        <button onClick={onIncrementClick}>Click</button>< br/>
    </div>
)

IncrementComponent.propTypes = {
  onIncrementClick: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default IncrementComponent