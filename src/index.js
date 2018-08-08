// File - src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import ChainList from './components/ChainList';
import ChainDetail from './components/ChainDetail';

// Render App
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ChainList} />
      <Route path="/chains/:chainid" component={ChainDetail} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);