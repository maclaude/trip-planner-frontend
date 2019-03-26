/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/components/NavbarUser';
import NewProject from 'src/containers/CreateProject/CreateProjectForm';


/**
 * Code
 */
const CreateProject = () => (
  <div>
    <NavbarUser />
    <NewProject />
  </div>
);

/**
 * Export
 */
export default CreateProject;
