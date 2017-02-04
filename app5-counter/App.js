import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {incrementAction} from './actions'
import IncrementComponent from './IncrementComponent'
import AddContainer from './AddContainer'

const App = ({ counter, incrementClick }) => {
  return <div>
            In App<br />
            <IncrementComponent onIncrementClick={incrementClick} counter={counter} />
            <AddContainer />
        </div>
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementClick: () => {dispatch(incrementAction())}
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp;



// class App extends Component {

//   render() {
      
//     console.log('Apps.render().  Props is', this.props);
//     var that = this
//     return (
//       <div>
//         In App
//         <button onClick={ () => this.props.dispatch({type: "x"}) }>Click</button>
//       </div>
//     )
//   }
// }
