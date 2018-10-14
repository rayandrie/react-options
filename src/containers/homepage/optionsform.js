import React, { Component } from 'react';
// import form
import { Field, reduxForm } from 'redux-form';
// import label
import Label from '../../components/label'
// import css
import './homepage.css';
// import connect
import { connect } from 'react-redux';
// import bindActionCreators
import { bindActionCreators } from 'redux';
// import DateTimePickers
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';
// import moment from 'moment';
// import momentLocalizer from 'react-widgets-moment-localizer';
// import action
import { fetchOptions } from '../../actions/index';

// momentLocalizer(moment)

// const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
//   <DateTimePicker
//     onChange={onChange}
//     format="DD MMM YYYY"
//     time={showTime}
//     value={!value ? null : new Date(value)}
//   />

class OptionsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    onSubmit = (values) => {
        console.log("Options Search: " + values.optionsSearch);
        console.log("Options Form: " + values.optionsDate);
        if (values.optionsSearch.length === 0) {
            return;
        }
        if (values.optionsDate.length === 0) {
            return;
        }
        this.props.fetchOptions(values.optionsSearch, values.optionsDate);
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="field">
                        <div className="control">
                            <label className="label" htmlFor="optionsSearch">Options Search: </label>
                            <Field 
                            className="input"
                            name="optionsSearch" 
                            component="input" 
                            type="text" 
                            placeholder="Search Options..." 
                            value={this.state.value} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label" htmlFor="optionsDatePick">Pick Options Date: </label>
                            <Field
                            className="input"
                            name="optionsDate"
                            component="input"
                            type="text"
                            placeholder="YYYY-MM-DD (Only Fridays)"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchOptions: fetchOptions }, dispatch);
}

export default reduxForm({
    form: 'Options Form'
})(connect(null, mapDispatchToProps)(OptionsForm));