/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarProject from 'src/components/NavbarProject';
import Projects from 'src/containers/MyProjects/projects';


/**
 * Code
 */
const MyProjects = () => (
  <div>
    <NavbarProject />
    <Projects />
  </div>
);

/**
 * Export
 */
export default MyProjects;
