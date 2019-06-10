/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/navigationSingleProject';
import ProjectDetails from 'src/containers/ProjectDetails/projectDetails';
import './project_details.scss';


/**
 * Code
 */
const MyProjectDetails = ({ project }) => (
  <div>
    <NavigationSingleProject project={project} />
    <ProjectDetails project={project} />
  </div>
);

// PropTypes validation
MyProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default MyProjectDetails;
