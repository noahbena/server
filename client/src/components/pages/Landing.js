import React from "react"
import './style.css';


class Landing extends React.Component {
    render (){
    return (
        <div className = "container">
        <h4>OnTrack</h4>
        <p>The goal of OnTrack is to facilitate the product managers & startup owners work on receiving feedback from users. This is to be done following two different functionalities.</p>
        <p>First, it is possible to send email surveys and receive back the answers without having to do it manually. The answers of the surveys will be recorded automatically.
        The second functionality is a dashboard that will permit you to see the tendencies of your users, taking the data recorded from your past surveys.</p> 
        </div>
    )
}
}


export default Landing