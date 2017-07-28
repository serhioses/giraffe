import React from 'react';
import {hashHistory} from 'react-router';
// import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createAd} from '../actions/actions';

class CreateAd extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        var title = this.refs.title.value,
            description = this.refs.description.value,
            id;

        e.preventDefault();

        if (!title.length || !description.length) {
            return;
        }

        id = Math.round(Math.random() * Date.now());

        this.props.dispatch(createAd(id, title, description, this.props.user.name));
        hashHistory.push(`/${id}`);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" placeholder="Title" required="required" ref="title" />
                    </div>
                    <div>
                        <textarea placeholder="Description" required="required" ref="description"></textarea>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => state
)(CreateAd);
