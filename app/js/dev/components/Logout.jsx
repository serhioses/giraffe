import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {logout} from '../actions/actions';

export class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }
    onLogout(e) {
        e.preventDefault();
        this.props.dispatch(logout());
    }
    render() {
        return (
            <div className="user">
                <h2 className="user__title">
                    {this.props.name}&nbsp;
                    <a className="user__logout link link--underline" href="logout" onClick={this.onLogout}>
                        log out
                    </a>
                </h2>
                <Link className="user__create-ad link" to="edit">Create Ad</Link>
            </div>
        );
    }
}

export default connect(
    (state) => state.user
)(Logout);
