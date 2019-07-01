/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Navigation from 'src/containers/Navigation';
import NewProject from 'src/containers/NewProject/NewProject';

/**
 * Code
 */
const NewProjectView = () => (
  <div className="user-view">
    <Navigation />
    <NewProject />
  </div>
);

/**
 * Export
 */
export default NewProjectView;
