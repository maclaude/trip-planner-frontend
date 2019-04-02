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
import UserProfil from 'src/components/UserProfil';
import Ideas from 'src/containers/Ideas';
import Participants from 'src/containers/Participants';
import Dates from 'src/containers/SuggestDates';

// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/inscription" component={Signup} />
      <Route exact path="/connexion" component={Login} />
      <Route exact path="/profil" component={UserProfil} />
      <Route exact path="/mes-projets" component={MyProjects} />
      <Route exact path="/nouveau-projet" component={CreateProject} />

      <Route exact path="/disponibilites/:slug" component={Availabilities} />
      <Route exact path="/idees/:slug" component={Ideas} />
      <Route exact path="/recapitulatif/:slug" component={MyProjectDetails} />
      <Route exact path="/dates/:slug" component={Dates} />
      <Route exact path="/participants/:slug" component={Participants} />

      {/* Fallback - gestion de 404 */}
      <Route component={NotFound} />
    </Switch>

  </div>
);

/**
 * Export
 */
export default App;
