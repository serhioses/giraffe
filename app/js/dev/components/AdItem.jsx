import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class AdItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, title, description, author, createdAt, name} = this.props;

        function renderDeleteButton () {
            if (author === name) {
                return <Link to={`delete/${id}`}>Delete</Link>;
            }

            return null;
        }

        return (
            <div>
                <h3>
                    <Link to={String(id)}>{title}</Link>
                </h3>
                <h4>{author}</h4>
                <p>{createdAt.toLocaleString()}</p>
                <div>{description}</div>
                {renderDeleteButton()}
            </div>
        );
    }
}

export default connect(
    (state) => state.user
)(AdItem);
