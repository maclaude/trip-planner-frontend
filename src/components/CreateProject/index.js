/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Navbar from 'src/containers/Navbar';
import NewProject from 'src/containers/CreateProject/CreateProjectForm';


/**
 * Code
 */
const CreateProject = () => (
  <>
    <Navbar />
    <NewProject />
  </>
);

/**
 * Export
 */
export default CreateProject;
