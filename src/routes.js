import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repo from './pages/repo';
import Notfound from './pages/Notfound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:gitUser/repos/:repoName" component={Repo} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;