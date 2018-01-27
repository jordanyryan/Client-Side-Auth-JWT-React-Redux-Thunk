import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
        </ul>
      </nav>
    )
  }
}

export default Header;