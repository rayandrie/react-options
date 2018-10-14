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

        this.state = {
            allOptions: this.props.allOptions,
            optionChoice: 'Call'
        };
    }

    // If new props come, function will execute
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.allOptions !== prevState.allOptions) {
            console.log(nextProps.allOptions)
            return {
                allOptions: nextProps.allOptions
            };
        } else {
            return null;
        }
    }

    // Function that makes the table header
    makeTableHeader = () => {
        const { options } = this.state.allOptions;
        if (options.data == null || typeof options.data === "undefined") {
            return;
        }
        return (
            <thead>
                <tr>
                    <th><abbr title="Description">Description</abbr></th>
                    <th><abbr title="Volume">Volume</abbr></th>
                    <th><abbr title="Strike Price">Strike Price</abbr></th>
                    <th><abbr title="Open Interest">Open Interest</abbr></th>
                </tr>
            </thead>
        );
    }

    // Function that will output each row
    outputEachRowCall = () => {
        const { options } = this.state.allOptions;
        if (options.data === null || typeof options.data === "undefined") {
            return;
        }
        // Filter by Call/Put
        const allCalls = options.data.filter(option => {
            return option.description.includes(this.state.optionChoice);
        });
        // Sort by Volume
        allCalls.sort((a, b) => {
            const lhs = a.volume;
            const rhs = b.volume;
            return rhs - lhs;
        });
        console.log(allCalls);
        return allCalls.map((option) => {
            const desc = option.description;
            const vol = option.volume;
            const strikePrice = option.strike;
            const openInterest = option.open_interest;
            return (
                <tr key={option.symbol}>
                    <th>{desc}</th>
                    <td>{vol}</td>
                    <td>{strikePrice}</td>
                    <td>{openInterest}</td>
                </tr>
            );
        });
    }

    // Function that will output the table containing the data received
    outputTableBody = () => {
        const { options } = this.state.allOptions;
        if (options.data === null || typeof options.data === "undefined") {
            return;
        }
        console.log(options.data);
        return (
            <tbody>
                {this.outputEachRowCall()}
            </tbody>
        );
    }

    // Want only calls
    onClickCall = () => {
        console.log("here in Call");
        if (this.state.optionChoice === 'Call') {
            return;
        } else {
            this.setState({
                ...this.state,
                optionChoice: 'Call'
            });
        }
    }

    // Want only puts
    onClickPut = () => {
        console.log("here in Put");
        if (this.state.optionChoice === 'Put') {
            console.log("tribe");
            return;
        } else {
            console.log("vickare");
            this.setState({
                ...this.state,
                optionChoice: 'Put',
            });
        }
    }

    render() {
        const { allOptions } = this.props;
        // console.log("here are all the options!");
        // console.log(allOptions);
        return(
            <div className="container">
                <div className="notification">
                    <Label cname="title" />
                    <OptionsForm />
                </div>
                <section className="section">
                    <div className="buttons has-addons">
                        <span className="button is-success is-selected" onClick={this.onClickCall}>Call</span>
                        <span className="button is-danger" onClick={this.onClickPut}>Put</span>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <table className="table">
                            {this.makeTableHeader()}
                            {this.outputTableBody()}
                        </table>
                    </div>
                </section>
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