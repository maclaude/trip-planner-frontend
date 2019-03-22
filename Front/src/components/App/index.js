/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Home from 'src/components/Home';
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import NotFound from 'src/components/NotFound';
import CreateProject from 'src/components/CreateProject';
import Availabilities from 'src/components/Availability';
import MyProjects from 'src/components/MyProjects';
import MyProjectDetails from 'src/components/ProjectDetails';
import UserProfil from 'src/components/UserProfil';


// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      {/* Fallback - gestion de 404 */}
      {/* <Route component={NotFound} /> */}
      <Route exact path="/Mes-projets" component={MyProjects} />
      <Route exact path="/Nouveau-Projet" component={CreateProject} />
      <Route exact path="/Disponibilites" component={Availabilities} />
      <Route exact path="/Récapitulatif" component={MyProjectDetails} />
      <Route exact path="/Profil" component={UserProfil} />
    </Switch>

  </div>
);

/**
 * Export
 */
export default App;
