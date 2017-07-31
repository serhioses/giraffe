import React from 'react';
import {connect} from 'react-redux';

import {addUser} from '../actions/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        var name = this.refs.name.value,
            password = this.refs.password.value;

        e.preventDefault();

        if (!name.length || !password.length) {
            return;
        }

        this.props.dispatch(addUser(name, password));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="form">
                        <div className="form-group">
                            <input className="form-field" type="text" placeholder="Name *" required="required" ref="name" />
                        </div>
                        <div className="form-group">
                            <input className="form-field" type="password" placeholder="Password *" required="required" ref="password" />
                        </div>
                        <div className="form__buttons">
                            <button className="button button--default button--raised button--raised_indigo" type="submit">Send</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect()(Login);
