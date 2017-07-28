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
                    <div>
                        <input type="text" placeholder="Name *" required="required" ref="name" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password *" required="required" ref="password" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);
