import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  

  render() {
    return(
      <nav className="navbar navbar-light justify-content-start navi">
        <Link className="navi-item" to="/">Home</Link>
        <Link className="navi-item" to="/signin">Sign In</Link>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return {authenticated: auth.authenticated};
}

export default connect(mapStateToProps)(Header);