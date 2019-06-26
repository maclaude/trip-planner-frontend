/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Views
import HomeView from 'src/components/Home';
import SignupView from 'src/components/Signup';
import LoginView from 'src/components/Login';
import InvitationView from 'src/containers/Invitation';
import ProjectsView from 'src/components/Projects';
import NewProjectView from 'src/components/NewProject';
import AvailabilityView from 'src/containers/Availability';
import ProjectDetailsView from 'src/containers/ProjectDetails';
import SuggestionsView from 'src/containers/Suggestions';
import SuggestDatesView from 'src/containers/SuggestDates';
import AddParticipantsView from 'src/containers/AddParticipants';
import NotFoundView from 'src/components/NotFound';
// HOC require authentification
import requiresAuth from 'src/components/RequiresAuth';
// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/inscription" component={SignupView} />
      <Route exact path="/connexion" component={LoginView} />
      <Route exact path="/invitation/:projectId" component={InvitationView} />
      <Route exact path="/mes-projets" component={requiresAuth(ProjectsView)} />
      <Route exact path="/nouveau-projet" component={requiresAuth(NewProjectView)} />
      <Route exact path="/disponibilites/:slug" component={requiresAuth(AvailabilityView)} />
      <Route exact path="/idees/:slug" component={requiresAuth(SuggestionsView)} />
      <Route exact path="/recapitulatif/:slug" component={requiresAuth(ProjectDetailsView)} />
      <Route exact path="/dates/:slug" component={requiresAuth(SuggestDatesView)} />
      <Route exact path="/participants/:slug" component={requiresAuth(AddParticipantsView)} />

      {/* Fallback - Page not found */}
      <Route component={NotFoundView} />
    </Switch>
  </div>
);

/**
 * Export
 */
export default App;
