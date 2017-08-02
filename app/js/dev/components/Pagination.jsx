import React from 'react';
import {connect} from 'react-redux';

import {setCurrentPage} from '../actions/actions';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.onPageChange = this.onPageChange.bind(this);
    }
    onPageChange(currentPage) {
        return () => {
            this.props.dispatch(setCurrentPage(currentPage));
        };
    }
    render() {
        var {totalPages, currentPage} = this.props;

        function renderPagination () {
            var pages = [];

            if (totalPages <= 1) {
                return null;
            }

            for (let i = 1; i <= totalPages; i += 1) {
                let button;

                if (i === currentPage) {
                    button = <span className="pagination__item pagination__item--active" key={i}>{i}</span>;
                } else {
                    button = <button className="pagination__item" type="button" key={i} onClick={this.onPageChange(i)}>{i}</button>;
                }

                pages.push(button);
            }

            return pages;
        }
        return (
            <div className="pagination">
                {renderPagination.call(this)}
            </div>
        );
    }
}

export default connect(
    (state) => state
)(Pagination);
