import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('root')
);