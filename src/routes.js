import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Repo from './pages/repo';
import Notfound from './pages/notfound';
import Tc from './pages/tc';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:user_id/tc" component={Tc} />
            <Route path="/:gitUser/repos/:repoName" component={Repo} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;