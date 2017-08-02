import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import adAPI from '../api/adAPI';
import {deleteAd, updateTotalPages} from '../actions/actions';

export class DeleteAd extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var id = this.props.routeParams.id,
            response = window.confirm('Confirm deleting the Ad');

        if (response) {
            this.props.dispatch(deleteAd(this.props.routeParams.id));
            this.props.dispatch(updateTotalPages(adAPI.getAds().length));
        }

        browserHistory.replace('/');
    }
    render() {
        return (
            <div className="container">
                <div className="content">
                    Deleting...
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state
)(DeleteAd);
