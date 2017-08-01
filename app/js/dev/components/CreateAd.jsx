import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import adAPI from '../api/adAPI';
import {createAd, editAd, updateTotalPages} from '../actions/actions';

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

        if (this.ad) {
            id = this.ad.id;

            this.props.dispatch(editAd(id, title, description));
        } else {
            id = Math.round(Math.random() * Date.now());

            this.props.dispatch(createAd(id, title, description, this.props.user.name));
        }

        this.props.dispatch(updateTotalPages(adAPI.getAds().length));
        
        browserHistory.push(`/${id}`);
    }
    componentWillMount() {
        var {id} = this.props.params;

        if (!id) {
            return;
        }

        this.ad = this.props.ads.filter((ad) => {
            return +ad.id === +id;
        })[0];
    }
    render() {
        var {id} = this.props.params,
            title, description;

        if (this.ad) {
            title = this.ad.title;
            description = this.ad.description;
        }

        function renderFrom () {
            if (id) {
                return (
                    <fieldset className="form">
                        <div className="form-group">
                            <input className="form-field" type="text" placeholder="Title" required="required" defaultValue={title} ref="title" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-field form-field--area" placeholder="Description" required="required" defaultValue={description} ref="description"></textarea>
                        </div>
                        <div className="form__buttons">
                            <button className="button button--big button--raised button--raised_indigo" type="submit">Save</button>
                        </div>
                    </fieldset>
                );
            }

            return (
                <fieldset className="form">
                    <div className="form-group">
                        <input className="form-field" type="text" placeholder="Title" required="required" ref="title" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-field form-field--area" placeholder="Description" required="required" ref="description"></textarea>
                    </div>
                    <div className="form__buttons">
                        <button className="button button--big button--raised button--raised_indigo" type="submit">Create</button>
                    </div>
                </fieldset>
            );
        }
        return (
            <div className="container">
                <div className="content">
                    <form onSubmit={this.handleSubmit}>
                        {renderFrom()}
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state
)(CreateAd);
