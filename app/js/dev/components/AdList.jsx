import React from 'react';
import {connect} from 'react-redux';

import asAPI from '../api/adAPI';

import AdItem from './AdItem';

class AdList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {ads} = this.props;

        function renderAds () {
            if (!ads.length) {
                return <p>There isn't any AD.</p>
            }

            return ads.map((ad) => {
                return <AdItem key={ad.id} {...ad} />
            });
        }

        return (
            <div>
                {renderAds()}
            </div>
        );
    }
}

export default connect(
    (state) => state
)(AdList);
