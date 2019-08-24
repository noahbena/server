import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    renderContent() {
      switch(this.props.auth){
        case null:
          return;
        case false:
          return (
            <li><a href="/auth/google">Login</a></li>
          )
        
        default:
          return (
            <li><a href="/api/logout">Logout</a></li>
          )
      }
    }
    render () {
        return(
        <nav>
        <div className="nav-wrapper">
          <Link 
          to="/" 
          className="brand-logo"
          >
          <i className="large material-icons large">unfold_less</i>          
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
              <li>
                <Link to="/about">
                About
                </Link>
              </li>
              <li>
                <Link 
                  to={this.props.auth ? "/surveys" : "/"} 
                >
                Surveys
                </Link>
                </li>
          </ul>
        </div>
      </nav>
        )
    }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);