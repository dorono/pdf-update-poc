import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import {
//   App,
//   ChainList,
//   ChainDetail,
// } from './components/App';

import App from './components/App';


// then our route config
const routes = [
  {
    path: "/",
    component: ChainList
  },
  {
    path: "/chain-detail",
    component: ChainDetail,
  }
];


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const Routes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default Routes;