//SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = (props) => {
    
    return (
        <div>
            <h2>Please confirm yout entries before submitting</h2>
            <div>
                <label>Survey Title</label>
                <div>{props.formValues.title}</div>
                <label>Subject Line</label>
                <div>{props.formValues.subject}</div>
                <label>Email Body</label>
                <div>{props.formValues.body}</div>
                <label>Recipient List</label>
                <div>{props.formValues.recipients}</div>
            </div>

            <button className="yellow darken-3 btn-flat white-text"
            onClick={props.onCancel}
            >
                Back
            </button>
            <button 
            onClick={() => props.submitSurvey(props.formValues, props.history)}
            className="blue btn-flat right white-text"
            >
               Send survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };

}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));