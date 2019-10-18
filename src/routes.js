import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repo from './pages/repo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:gitUser/repos/:repoName" component={Repo} />
        </Switch>
    </BrowserRouter>
);

export default Routes;