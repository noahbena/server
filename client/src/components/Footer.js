import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
   

class Footer extends React.Component {

render () {
    return  (
       
    <footer style={{marginTop: '650px', marginBottom: '10px'}} class="page-footer">
          <div class="container">
          Contact:   <a href="mailto:nour.benhassen@gmail.com">nour.benhassen@gmail.com</a>
          <a class="grey-text text-lighten-4 right" href="#!">Any comment / Feedback is welcome</a>
          </div>
      </footer>
      );
    }
}

function mapStateToProps(state){
    return { auth: state.auth }
  }

export default connect(mapStateToProps)(Footer);