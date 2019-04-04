/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/containers/NavbarUser';
import ProjectDetails from './ProjectDetails';
import './project_details.scss';


/**
 * Code
 */
const MyProjectDetails = ({ project }) => (
  <div>
    <NavbarUser project={project} />
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
