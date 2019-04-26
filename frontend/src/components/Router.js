import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import GiveAnswer from '../screens/GiveAnswer';
import NewQuestion from '../screens/NewQuestion';
import NotFound from '../screens/NotFound';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/giveanswer/:questionId" exact component={GiveAnswer} />
      <Route path="/newquestion" exact component={NewQuestion} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
