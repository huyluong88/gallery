import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Gallery from './gallery'
import Album from './album'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery}/>
      <Route path="/album/:car" component={Album}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
