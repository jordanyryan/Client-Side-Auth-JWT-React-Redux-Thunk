import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component { 
  render() {
    return(
      <div> Sign Up </div>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(
connect(null, actions)(Signup)
)