import React from 'react'
import LoginForm from '../forms/LoginForm'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/auth'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }
    submit = (data) => {
       this.props.login(data).then(() => this.props.history.push("/"))
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

LoginPage.propTypes = {
    history: PropTypes.sharp({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {})(LoginPage)