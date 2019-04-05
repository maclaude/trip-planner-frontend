/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarProject from 'src/containers/NavbarProject';
import Projects from 'src/containers/MyProjects/projects';
// Store
import store from 'src/store';
import { getUserInfo } from 'src/store/reducers/login';
import { getProjects } from 'src/store/reducers/createProject';
import { getSuggestions } from 'src/store/reducers/ideas';


/**
 * Code
 */
class MyProjects extends React.Component {
  componentWillMount() {
    store.dispatch(getProjects());
    store.dispatch(getUserInfo());
    store.dispatch(getSuggestions());
  }

  render() {
    return (
      <div>
        <NavbarProject />
        <Projects />
      </div>
    );
  }
}

/**
 * Export
 */
export default MyProjects;
