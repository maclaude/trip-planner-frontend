/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/components/NavbarUser';
import ProjectDetails from './ProjectDetails';
import './project_details.scss';


/**
 * Code
 */
const MyProjectDetails = () => (
  <div>
    <NavbarUser />
    <ProjectDetails />
  </div>
);

/**
 * Export
 */
export default MyProjectDetails;
