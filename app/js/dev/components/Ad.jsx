import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Ad extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.ad = this.props.ads.filter((ad) => {
            return +ad.id === +this.props.params.id;
        })[0];
    }
    render() {
        var {id, title, description, author, createdAt} = this.ad,
            {user} = this.props;
        
        function renderDeleteButton () {
            if (user && author !== user.name) {
                return null;
            }

            return <Link className="button button--default button--raised button--raised_indigo" to={`delete/${id}`}>Delete</Link>
        }
        
        return (
            <div className="container">
                <div className="content">
                    <div className="ad">
                        <h1 className="title">{title}</h1>
                        <span className="ad__author">{author}</span>
                        <time className="ad__date">{(new Date(createdAt)).toLocaleString()}</time>
                        <div className="ad__desc">{description}</div>
                        <div className="ad__buttons">
                            {renderDeleteButton()}
                        </div>
                    </div>
                    <Link className="to-main link link--underline" to='/'>Return to main page</Link>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => state
)(Ad);
