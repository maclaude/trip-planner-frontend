/**
 * NPM import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Components
import Navbar from 'src/components/Navbar';
import NewProject from './NewProject';


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
