/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarProject from 'src/components/NavbarProject';
import ProjectDetails from './ProjectDetails';


/**
 * Code
 */
const MyProjectDetails = () => (
  <div>
    <NavbarProject />
    <ProjectDetails />
  </div>
);

/**
 * Export
 */
export default MyProjectDetails;
