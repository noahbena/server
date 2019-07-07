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
          to={this.props.auth ? "/surveys" : "/"} 
          className="brand-logo"
          >
            LOGO
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
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