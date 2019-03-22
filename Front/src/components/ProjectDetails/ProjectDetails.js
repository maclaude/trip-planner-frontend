/**
 * NPM IMPORT
 */
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

/**
 * Local import
 */
import './project_details.scss';

/**
 * Code
 */
const ProjectDetails = () => (
  <div id="projectDetails">
    <div id="projectDetails-banner">
      <h1>Recapitulatif du projet - New-York 2019</h1>
    </div>
    <div id="projectDetails-header">
      <div id="destination">
        <h2>Destination</h2>
        <div id="project-card">
          <Card>
            <Image src="src/assets/images/new-york.jpg" />
            <Card.Content>
              <Card.Header>
                New-York
              </Card.Header>
              <Card.Meta>
                Date: 10/07/2019 au 25/07/2019
              </Card.Meta>
              <Card.Description>
                Voyage a New-York entre pote
              </Card.Description>
            </Card.Content>
            <Card.Content Extra>
              Statut: terminé
            </Card.Content>
          </Card>
        </div>
      </div>
      <div id="participants">
        <h2>Participants</h2>
        <div id="participants-card">
          <Card>
            <Image src="src/assets/avatar/default.png" />
            <Card.Header>
              Anthony
            </Card.Header>
          </Card>
          <Card>
            <Image src="src/assets/avatar/default.png" />
            <Card.Header>
              Marc-Antoine
            </Card.Header>
          </Card>
          <Card>
            <Image src="src/assets/avatar/default.png" />
            <Card.Header>
              Florent
            </Card.Header>
          </Card>
        </div>
      </div>
    </div>
    <div id="handle-date">
      <h2>Date retenue</h2>
      <h3>10/07/2019 au 25/07/2019</h3>
    </div>
    <div id="accomodation">
      <h2>Hebergement</h2>
    </div>
    <div id="activity">
      <h2>Activités</h2>
    </div>
  </div>
);

/**
 * Export
 */
export default ProjectDetails;
