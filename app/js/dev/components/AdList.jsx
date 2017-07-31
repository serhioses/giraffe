import React from 'react';
import {connect} from 'react-redux';

import asAPI from '../api/adAPI';

import AdItem from './AdItem';

class AdList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {ads, currentPage} = this.props;

        function renderAds () {
            var currentAds;

            if (!ads.length) {
                return <p className="ads__empty">There isn't any Ad.</p>
            }

            currentAds = ads.slice((currentPage - 1) * 5, currentPage * 5);

            return currentAds.map((ad) => {
                return <AdItem key={ad.id} {...ad} />
            });
        }

        return (
            <div>
                <h1 className="title">Advertisements</h1>
                <div className="ads">
                    {renderAds()}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state
)(AdList);
