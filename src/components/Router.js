import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:page/:number" component={App} />
      <Route path="/:page" component={App} />
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch> 
  </BrowserRouter>
);

export default Router;
