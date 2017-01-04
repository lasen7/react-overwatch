import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Home, Detail, NotFound } from 'containers';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
