import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }
    
    render () {
        return (
            <div>
                <h4>Previous surveys</h4>
                {this.renderSurveys().length >= 1 ? this.renderSurveys() : noSurveys()}
            </div>
        );
    }
}

function noSurveys () {
  return (
    <div>
        There are currently no previous surveys to display
    </div>)
}

function mapStateToProps({ surveys }) {
    return { surveys };
}
    export default connect(mapStateToProps, { fetchSurveys })(SurveyList);