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
// import projectsData from 'src/data/projects';

/**
 * Code
 */
const Projects = () => (
  <div id="myprojects">
    <div id="myprojects-banner">
      <h1>Mes projets</h1>
    </div>
    <div id="project-card">
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>
              New-York
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              Voyage a New-York entre pote
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta>
              Date: 10/07/2019 au 25/07/2019
            </Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  </div>
);

/**
 * Export
 */
export default Projects;
