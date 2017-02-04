import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import { authenticate } from '../actions/user-actions'
import UserComponent from '../components/UserComponent'

const loadData = ({ authenticate }) => {
    console.log('In loadData')
    //authenticate()
}

class UserContainer extends Component {
    static propTypes = {
        authenticate: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    }

    buttonClicked() {
        console.log('button click called...');
        console.log('this is ', this)
        //console.dir(this)
        //this.props.authenticate()
    }

    buttonClicked2() {
        //console.dir(this)
        this.props.authenticate()
    }

    componentWillMount() {
        //loadData(this.props)
        //this.props.authenticate()
        //console.log('componentWillMount finished!');
    }

    render () {
        // console.log('In render. this is...');console.dir(this)
        return (
            <div style={{border: "1px solid red", margin: '15px', width: '300px', padding: '20px'}}>
                UserClassContainer<br />
                <button onClick={ () => this.buttonClicked() }>Click 1 </button>
                <button onClick={ () => this.buttonClicked2() }>Click 2 </button>
                <UserComponent  userData={this.props.userData} authenticate={this.props.authenticate} />
            </div>
            
        )
    }
}

// without this method this.props will only have the dispatch function bound to it
// all keys in the return object get mapped to this.props
function mapStateToProps(state) {
    //state is the entire redux store
    return { userData: state.userData};
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//         console.log('onlci called')
//         console.dir(this)
//         console.dir(dispatch)
//       authenticate('user', 'pass');
//       //dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

//connect will add authenticate and userData to this.props for UserContainer
export default connect(
        mapStateToProps,
       { authenticate }
    )(UserContainer);