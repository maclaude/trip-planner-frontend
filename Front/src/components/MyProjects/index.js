/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarProject from 'src/components/NavbarProject';
import Projects from './MyProjects';


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
