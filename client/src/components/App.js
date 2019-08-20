//React Router

import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions'


//BrowserRouter = brain of react router
//Route: 

import Header from './Header'
import Landing from "./Landing"
import Dashboard from './Dashboard'
import Thanks from './Thanks'
import SurveyNew from './surveys/SurveyNew'

class App extends React.Component {
    componentDidMount () {
        this.props.fetchUser();
    }
    render(){
    return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route exact path="/" component={Landing} />
                    <Route path="/thanks/:feedback" component={Thanks}/> 
                </div>
            </BrowserRouter>
    );
}
}

export default connect(null, actions)(App);