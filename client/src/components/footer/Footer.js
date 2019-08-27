import React from "react"
import { connect } from 'react-redux'   
import './footer.css';

class Footer extends React.Component {

render () {
    return  (
       
    <footer class="content">
          <div class="footer">
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