import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';

import {deleteAd} from '../actions/actions';

class DeleteAd extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var id = this.props.routeParams.id;

        this.props.dispatch(deleteAd(this.props.routeParams.id));
        hashHistory.replace('/');
    }
    render() {
        return (
            <div>
                Deleting...
            </div>
        );
    }
}

export default connect()(DeleteAd);
