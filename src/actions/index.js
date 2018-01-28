import axios from 'axios';
import * as types from './types';

// API Server where users are handled
const ROOT_URL = "http://localhost:3090";

export function signinUser({email, password}, callback) {

  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then( (response) => {
      dispatch({type: types.AUTH_USER}); //  - update state to indicate user is authenticated
      localStorage.setItem('token', response.data.token); //  - save JWT token
      callback() //  - redirect to protected route / or wherever else
    })
    .catch((err) => {
      dispatch(authError('Email/Password incorrect'));
    }); 
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}
