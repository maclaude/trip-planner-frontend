/**
 * NPM import
 */
import React from 'react';
import { Card } from 'semantic-ui-react';

/**
 * Local import
 */
// Styles
import './myprojects.scss';
// Data
import projects from 'src/data/projects';
// Components
import SingleProjectCard from './singleProjectCard';

/**
 * Code
 */
const Projects = () => (
  <div id="myprojects">
    <div id="myprojects-banner">
      <h1>Mes projets</h1>
    </div>
    <div id="project-cards">
      <Card.Group>
        {projects.map(project => (
          <SingleProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </Card.Group>
    </div>
  </div>
);

/**
 * Export
 */
export default Projects;
