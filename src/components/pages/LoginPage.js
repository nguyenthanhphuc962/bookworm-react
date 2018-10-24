import React from 'react'
import LoginForm from '../forms/LoginForm'


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }
    submit = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm submit={this.submit} />
            </div>
        )
    }
}


export default LoginPage