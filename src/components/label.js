import React, { Component } from 'react';
// Link like anchor tag
import { Link } from 'react-router-dom';

class Label extends Component {
    render() {
        const { cname } = this.props;
        return (
            <div className={cname}>
                <Link  to="/">
                    <h1>Options Project</h1>
                </Link>
            </div>
        );
    }
}

export default Label;