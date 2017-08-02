import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

export class AdItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, title, description, author, createdAt, name} = this.props;

        function renderButtons () {
            if (author === name) {
                return (
                    <div>
                        <Link className="button button--default button--flat button--flat_indigo button--flat_indent" to={`delete/${id}`}>Delete</Link>
                        <Link className="button button--default button--raised button--raised_indigo" to={`edit/${id}`}>Edit</Link>
                    </div>
                );
            }

            return null;
        }

        return (
            <div className="ad-preview">
                <h2 className="ad-preview__title">
                    <Link to={String(id)}>{title}</Link>
                </h2>
                <span className="ad-preview__author">{author}</span>
                <time className="ad-preview__date">{(new Date(createdAt)).toLocaleString()}</time>
                <div className="ad-preview__desc">{description}</div>
                <div className="ad-preview__buttons">
                    {renderButtons()}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state.user
)(AdItem);
