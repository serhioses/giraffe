import React from 'react';
import {connect} from 'react-redux';

import Login from './Login';
import Logout from './Logout';

export class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        function renderUser () {
            if (this.props.user.name) {
                return <Logout />;
            }

            return <Login />; 
        }
        return (
            <div>
                {renderUser.call(this)}
            </div>
        );
    }
}

export default connect(
    (state) => state
)(User);
