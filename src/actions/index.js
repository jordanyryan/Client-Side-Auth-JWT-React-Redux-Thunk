import axios from 'axios';

export function signinUser({email, password}) {
  // Submit email/password to server
  // If request is good
  //  - update state to indicate user is authenticated
  //  - save JWT token
  //  - redirect to protected route / or wherever else

  // If request is bad
  //  - show an error to user
}