/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Navigation from 'src/containers/Navigation';
import NewProject from 'src/containers/CreateProject/CreateProjectForm';


/**
 * Code
 */
const CreateProject = () => (
  <>
    <Navigation />
    <NewProject />
  </>
);

/**
 * Export
 */
export default CreateProject;
