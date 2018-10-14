import React, { Component } from 'react';
// import form
import { Field, reduxForm } from 'redux-form';
// import label
import Label from '../../components/label'
// import css
import './homepage.css';
// import connect
import { connect } from 'react-redux';
// import Options Form
import OptionsForm from './optionsform';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        const { allOptions } = this.props;
        console.log("here are all the options!");
        console.log(allOptions);
        return(
            <div className="container">
                <div className="notification">
                    <Label cname="title" />
                    <OptionsForm />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allOptions: state.optionsReducer
    };
}

export default connect(mapStateToProps)(HomePage);