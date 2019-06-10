/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavigationProjects from 'src/containers/Navigation/navigationProjects';
import Projects from 'src/containers/MyProjects/projects';


/**
 * Code
 */
const MyProjects = () => (
  <>
    <NavigationProjects />
    <Projects />
  </>
);

/**
 * Export
 */
export default MyProjects;
