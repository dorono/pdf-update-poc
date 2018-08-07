import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import {
//   App,
//   ChainList,
//   ChainDetail,
// } from './components/App';

import App from './components/App';
import ChainList from './components/ChainList';
import ChainDetail from './components/ChainDetail';

// React router v4 - https://reacttraining.com/react-router/
const RootRoutes = (
  <Switch>
    <Route exact path="/" component={ChainList}/>
    <Route path="/chain-detail" component={ChainDetail}/>
  </Switch>
);

export default routes (
  <Route
    path="/"
    render={() => <App><RootRoutes /></App>}
  />
);
