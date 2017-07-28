import React from 'react';

import User from './User';
import AdList from './AdList';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <User />
                <AdList />
            </div>
        );
    }
}
