import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  renderField(field) {
    const {touched, error} = field.meta;
    const className=`form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    )
  }

  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password}, () => {
      this.props.history.push('/feature');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          label="Email:"
          name="email"
          component={this.renderField}
        />
        <Field
          label="Password:"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}


function validate(values) {
  // values --> Values in input fields as object at time of submit
  const errors = {};

  // then validate inputs
  if (!values.email) {
    errors.email = "Enter an email!";
  }
  if (!values.password) {
    errors.password = "Enter a password!"
  }
  // if errors is empty, form is fine to submit
  // if errors has any properties, redux form assumes invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'signin'
})(
  connect(null, actions)(Signin)
)



