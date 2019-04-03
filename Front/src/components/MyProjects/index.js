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
import { getProjects } from 'src/store/reducers/createProject';


/**
 * Code
 */
class MyProjects extends React.Component {
  componentDidMount() {
    store.dispatch(getProjects());
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
