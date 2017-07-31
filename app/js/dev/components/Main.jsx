import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
