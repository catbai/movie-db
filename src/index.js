import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './css/index.css';
import Loadable from 'react-loadable';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import 'react-bootstrap';

const LoadableDetails = Loadable({
  loader: () => import('./components/MovieDetails'),
  loading() {
    return <h1>loading</h1>
  }
})

const LoadableResult = Loadable({
  loader: () => import('./components/MovieData'),
  loading() {
    return <h1>loading</h1>
  }
})


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={LoadableResult} exact />
      <Route path="/details/:id" component={LoadableDetails} exact />
    </BrowserRouter >
  </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
