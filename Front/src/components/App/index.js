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
import Availabilities from 'src/components/Availability';
import MyProjects from 'src/components/MyProjects';
import MyProjectDetails from 'src/components/ProjectDetails';
import UserProfil from 'src/components/UserProfil';
import Ideas from 'src/components/Ideas';


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
      <Route exact path="/mes-projets" component={MyProjects} />
      <Route exact path="/nouveau-projet" component={CreateProject} />
      <Route exact path="/disponibilites" component={Availabilities} />
      <Route exact path="/recapitulatif" component={MyProjectDetails} />
      <Route exact path="/idées" component={Ideas} />
      <Route exact path="/profil" component={UserProfil} />

      {/* Fallback - gestion de 404 */}
      <Route component={NotFound} />
    </Switch>

  </div>
);

/**
 * Export
 */
export default App;
