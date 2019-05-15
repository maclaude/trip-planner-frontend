/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Views
import Home from 'src/components/Home';
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import NotFound from 'src/components/NotFound';
import CreateProject from 'src/components/CreateProject';
import Availabilities from 'src/containers/Availability';
import MyProjects from 'src/components/MyProjects';
import MyProjectDetails from 'src/containers/ProjectDetails';
import Ideas from 'src/containers/Ideas';
import Participants from 'src/containers/Participants';
import Dates from 'src/containers/SuggestDates';
// Style
import './app.scss';
// Authentification
import requiresAuth from 'src/components/RequiresAuth';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/inscription" component={Signup} />
      <Route exact path="/connexion" component={Login} />
      <Route exact path="/mes-projets" component={requiresAuth(MyProjects)} />
      <Route exact path="/nouveau-projet" component={requiresAuth(CreateProject)} />
      <Route exact path="/disponibilites/:slug" component={requiresAuth(Availabilities)} />
      <Route exact path="/idees/:slug" component={requiresAuth(Ideas)} />
      <Route exact path="/recapitulatif/:slug" component={requiresAuth(MyProjectDetails)} />
      <Route exact path="/dates/:slug" component={requiresAuth(Dates)} />
      <Route exact path="/participants/:slug" component={requiresAuth(Participants)} />

      {/* Fallback - Page not found */}
      <Route component={NotFound} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
