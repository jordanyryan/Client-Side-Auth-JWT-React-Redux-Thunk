import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import {AUTH_USER} from './actions/types';

import Signin from './components/auth/signin';
import Header from './components/header';
import Feature from './components/feature';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import requireAuth from './components/auth/require_authentication'; // higher order components to authenticate components/routes
import requireUnauth from './components/auth/redirect_auth';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/feature" component={requireAuth(Feature)} />
          <Route path="/signin" component={requireUnauth(Signin)} />
          <Route path="/signup" component={requireUnauth(Signup)} />
          <Route path="/signout" component={Signout} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
