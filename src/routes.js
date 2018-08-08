// File - src/routes.js

import React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import ChainList from './components/ChainList';
import ChainDetail from './components/ChainDetail';

export default (
  <Switch>
    <Route path="/chain-detail" component={ChainDetail}/>
    <Route exact path="/" component={ChainList}/>
  </Switch>
);