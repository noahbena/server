//SurveyForm shows a form for a user to add input
import React from "react";
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends React.Component {
    render() {
        return (
            <div>
                <form 
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                    <div>
                    <Field label="Survey Title" type="text" name="title" component={SurveyField}/>
                    <Field label="Subject Line" type="text" name="subject" component={SurveyField}/>
                    <Field label="Email Body" type="text" name="body" component={SurveyField}/>
                    <Field label="Recipient List" type="text" name="emails" component={SurveyField}/>
                    </div>
                    <Link to="/surveys" className="red btn-flat white-">
                        Cancel
                    </Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    };
}

function validate(values) {
    const errors = {};

    if(!values.title)
        errors.title = 'You must provide a title';

    if(!values.subject)
        errors.subject = 'You must provide a subject';

    if(!values.body)
        errors.body = 'You must provide a body';
    
    //Emails should be separated by commas
    if (values.emails)
    errors.emails= validateEmails(values.emails);

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);