import axios from 'axios';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';

// API Server where users are handled
const ROOT_URL = "http://localhost:3090";

export function signinUser({email, password}, callback) {

  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then( (response) => {
      dispatch({type: AUTH_USER}); //  - update state to indicate user is authenticated
      localStorage.setItem('token', response.data.token); //  - save JWT token
      callback() //  - redirect to protected route / or wherever else
    })
    .catch((err) => {
      dispatch(authError('Email/Password incorrect'));
    }); 
  }
}


export function signoutUser() {
  localStorage.removeItem('token');
  return {type: UNAUTH_USER}
}

export function signupUser({email, password}, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then( response => {
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
      callback()
    })
    .catch(({response}) => {
      dispatch(authError(response.data.error))
    })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

