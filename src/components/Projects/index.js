/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import NavigationProjects from 'src/containers/Navigation/NavigationProjects';
import Projects from 'src/containers/Projects/Projects';


/**
 * Code
 */
const ProjectsView = () => (
  <div id="projectsView">
    <NavigationProjects />
    <Projects />
  </div>
);

/**
 * Export
 */
export default ProjectsView;
