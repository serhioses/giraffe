import React from 'react';
// import {hashHistory} from 'react-router';
import {connect} from 'react-redux';

// import {createAd} from '../actions/actions';

class Ad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Ad page
            </div>
        );
    }
}

export default connect(
    (state) => state
)(Ad);
