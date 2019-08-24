import React from "react";
import { Link } from 'react-router-dom';
import SurveyList from './surveys/surveyList';

const Dashboard = () => {
    return (
        <div>
            <h4>New survey</h4>
            <p style={{ textDecoration: 'underline' }}>To create a new survey please click on the '+' sign on the bottom-right of the page</p>
            <h4>Guidelines for new surveys</h4>
            <p>Before adding too many questions to your survey, consider the following thoughts:</p>
            <ul style={{ marginLeft: "30px" }}>
                <li style={{ listStyleType: "disc" }}>Only ask questions that fulfill your aim</li>
                <li style={{ listStyleType: "disc" }}>Ask one question at a time</li>
                <li style={{ listStyleType: "disc" }}>Avoid complete, irritating or loaded questions</li>
                <li style={{ listStyleType: "disc" }}>Make sure all questions are consistent</li>
            </ul>
            <SurveyList />
            <div className="fixed-action-btn">
            <Link to="/surveys/new" className="btn-floating btn-large red">
                <i className="material-icons">add</i>
             </Link>
            </div>
        </div>
    );
};

export default Dashboard;