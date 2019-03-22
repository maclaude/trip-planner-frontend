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


// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/signup" component={Signup} /> */}
      {/* <Route exact path="/login" component={Login} /> */}
      {/* Fallback - gestion de 404 */}
      {/* <Route component={NotFound} /> */}
    </Switch>

    {/* <CreateProject /> */}
    <Availabilities />
    {/* <MyProjects /> */}
    {/* <MyProjectDetails /> */}

  </div>
);

/**
 * Export
 */
export default App;
