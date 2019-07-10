/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavigationProjects from 'src/containers/Navigation/NavigationProjects';
import Profil from './Profil';


/**
 * Code
 */
const ProjectsView = () => (
  <div className="user-view">
    <NavigationProjects />
    <Profil />
  </div>
);

/**
 * Export
 */
export default ProjectsView;
