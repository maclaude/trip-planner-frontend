/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/components/NavbarUser';
import ProjectDetails from './ProjectDetails';
import './project_details.scss';


/**
 * Code
 */
const MyProjectDetails = ({ project }) => (
  <div>
    <NavbarUser />
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
