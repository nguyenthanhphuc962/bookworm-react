import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from "../messages/InlineError"
import PropTypes from 'prop-types'


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                email: "",
                password: ""
            },
            loading: false,
            errors: {

            }

        }
    }

    onChange = (e) => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value}
        })
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({errors})
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
        }
    }

    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) {
            errors.email = "Invalid email"
        } 
        if (!data.password) {
            errors.password = "Can't be blank"
        }
        return errors
    }

    render() {
        const { data, errors } = this.state
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field error={!!errors.email}>
                        <input type="email" id="email" name="email" placeholder="Email" defaultValue={data.email} onChange={this.onChange} />
                    </Form.Field>
                    { errors.email && <InlineError text={errors.email} />}

                    <Form.Field error={!!errors.password}>
                        <input type="password" id="password" name="password" placeholder="Password" defaultValue={data.password} onChange={this.onChange} />
                    </Form.Field>
                    { errors.password && <InlineError text={errors.password} />}

                    <Button primary>Login</Button>
                </Form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm