import React from 'react';

import User from './User';
import AdList from './AdList';
import Pagination from './Pagination';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <User />
                <AdList />
                <Pagination />
            </div>
        );
    }
}
