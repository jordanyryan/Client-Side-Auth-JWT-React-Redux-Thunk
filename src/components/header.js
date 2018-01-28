import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  renderLinks() {
    if (!this.props.authenticated) {
      return [
        <Link key={1} className="navi-item" to="/signin">Sign In</Link>,
        <Link key={2} className="navi-item" to="/signup">Sign Up</Link>
      ]
      
    }
    return <Link onClick={} className="navi-item" to="/signout">Sign Out</Link>;
  }

  onClickSignOut() {
    
  }

  render() {
    return(
      <nav className="navbar navbar-light navi">
        <Link className="navi-item" to="/">Home</Link>
        {this.renderLinks()}
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return {authenticated: auth.authenticated};
}

export default connect(mapStateToProps)(Header);