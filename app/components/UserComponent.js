import React, { Component, PropTypes } from 'react'

export default class UserComponent extends Component {
    static propTypes = {
        authenticate: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    }

    go = () => {
        console.log('GO!!!!!!')
        console.log(this.refs.username.value)
        this.props.authenticate('u', 'p');
    }

    inputChange = (e) => {
        console.log("Input Field changed!"); console.dir(e);
        console.log(e.target.value)
    }

    render() {
        return (
            <div style={{border: "1px solid green", margin: '15px', width: '200px', padding: '20px'}}>
                In UserComponent<br />
                <input ref='username' onChange={this.inputChange} />
                <button onClick={this.go}>sssssss</button>
            </div>
        )
    }
}

