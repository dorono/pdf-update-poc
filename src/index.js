import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Routes from './routes';
import ChainList from './components/ChainList';
import ChainDetail from './components/ChainDetail';


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

const Routes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

ReactDOM.render(
  <Router>
    <div>{routes.map((route, i) => <Routes key={i} {...route} />)}</div>
  </Router>,
  document.getElementById('root')
);