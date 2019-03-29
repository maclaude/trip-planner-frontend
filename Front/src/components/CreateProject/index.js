/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Navbar from 'src/containers/NavbarProject';
import NewProject from 'src/containers/CreateProject/CreateProjectForm';


/**
 * Code
 */
const CreateProject = () => (
  <div>
    <Navbar />
    <NewProject />
  </div>
);

/**
 * Export
 */
export default CreateProject;
