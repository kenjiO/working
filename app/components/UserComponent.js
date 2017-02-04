import React, { Component, PropTypes } from 'react'

export default class UserComponent extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    }

    loginBtnClick = () => {
        this.props.login(this.refs.username.value, this.refs.password.value);
    }

    logoutBtnClick = () => {
        this.props.logout();
    }

    render() {
        let content
        if (this.props.userData.user && this.props.userData.user.id) {
            content = (
                <div>
                    Logged on with userId: {this.props.userData.user.id}<br />
                    <button onClick={this.logoutBtnClick} disabled={this.props.userData.isLoading}>Logout</button>
                </div>
            )
        } else {
            content = (
                <div>
                    <input ref='username' value="admin" readOnly={true}/>
                    <input ref='password' value="password" readOnly={true}/>
                    <button onClick={this.loginBtnClick} disabled={this.props.userData.isLoading}>Login</button>
                    {this.props.userData.error && <div>ERROR: {this.props.userData.error}</div>}
                    {this.props.userData.isLoading && <div>Loading...</div>}
                </div>
            )
        }

        return (
            <div style={{ border: "1px solid green", margin: '15px', width: '200px', height: '85px', padding: '20px' }}>
                In UserComponent<br />
                {content}
            </div>
        )
    }
}

