/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
// Styles
import './myprojects.scss';
// Components
import SingleProjectCard from './singleProjectCard';

/**
 * Code
 */
const Projects = ({ projects }) => (
  <div id="myprojects">
    <div id="myprojects-banner">
      <h1>Mes projets</h1>
    </div>
    <Card.Group
      id="myprojects-cards"
    >
      {projects.map(project => (
        <SingleProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </Card.Group>
    <div id="myprojects-create">
      <NavLink
        to="/nouveau-projet"
        className="item"
      >
        Créer un nouveau projet
      </NavLink>
    </div>
  </div>
);

// PropTypes validation
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Projects;
