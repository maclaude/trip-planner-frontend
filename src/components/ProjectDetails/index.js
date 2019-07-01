/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/NavigationSingleProject';
import ProjectDetails from 'src/containers/ProjectDetails/ProjectDetails';
import './project_details.scss';


/**
 * Code
 */
const ProjectDetailsView = ({ project }) => (
  <div className="user-view">
    <NavigationSingleProject project={project} />
    <ProjectDetails project={project} />
  </div>
);

// PropTypes validation
ProjectDetailsView.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default ProjectDetailsView;
