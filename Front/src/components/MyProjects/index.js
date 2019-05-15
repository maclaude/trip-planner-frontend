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


/**
 * Code
 */
const MyProjects = () => (
  <>
    <NavbarProject />
    <Projects />
  </>
);

/**
 * Export
 */
export default MyProjects;
