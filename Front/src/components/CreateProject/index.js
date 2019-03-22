/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/components/NavbarUser';
import NewProject from './NewProject';


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
