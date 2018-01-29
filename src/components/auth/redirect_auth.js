import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.validate(this.props);
    }

    componentWillUpdate(nextProps) {
      this.validate(nextProps)
    }

    validate(someProps) {
      if (someProps.authenticated) {
        someProps.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps({auth}) {
    return {authenticated: auth.authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}