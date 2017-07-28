import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {logout} from '../actions/actions';

class Logout extends React.Component {
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
            <div>
                <h2>
                    {this.props.name}&nbsp;
                    <a href="logout" onClick={this.onLogout}>
                        Log out
                    </a>
                </h2>
                <p>
                    <Link to="edit">Create Ad</Link>
                </p>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state.user
    }
)(Logout);
