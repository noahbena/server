//SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from 'react-redux';


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
                <div>{props.formValues.emails}</div>
            </div>

            <button className="yellow darken-3 btn-flat"
            onClick={props.onCancel}
            >
                Back
            </button>
            <button type="submit" className="teal btn-flat right white-text">
                    Submit
                    <i className="material-icons right">done</i>
                </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };

}

export default connect(mapStateToProps)(SurveyFormReview);