import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import Signin from './components/auth/signin';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
