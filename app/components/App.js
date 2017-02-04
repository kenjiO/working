import React, { Component, PropTypes } from 'react';

import IncrementContainer from '../containers/IncrementContainer'
import UserClassContainer from '../containers/UserClassContainer'

const App = (propParams) => {
  return (
    <div style={{ border: "1px solid black", margin: '15px', width: '500px', padding: '20px' }}>
      App container <br />
      <UserClassContainer />
      <IncrementContainer />
    </div>
  )
}

export default App;

