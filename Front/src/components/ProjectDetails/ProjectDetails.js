/**
 * NPM IMPORT
 */
import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';

/**
 * Local import
 */
import './project_details.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';
import newYork from 'src/assets/images/new-york.jpg';
// Data
import Projects from 'src/data/projects';

const project = Projects[3];

/**
 * Code
 */
const ProjectDetails = () => (
  <div id="projectDetails">

    <div id="projectDetails-banner">
      <h1>Recapitulatif du projet - {project.title}</h1>
    </div>

    <div id="projectDetails-header">
      <div id="projectDetails-header-left">
        <h2>Destination</h2>
        <div id="project-card">
          <Card className="trip">
            <Image src={newYork} />
            <Card.Content>
              <Card.Header>
                {project.destination}
              </Card.Header>
              <Card.Description>
                {project.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>

      <div id="projectDetails-header-right">
        <div>
          <h2>Participants</h2>
          <List
            id="projectDetails-header-right-participants-list"
            animated
            verticalAlign="middle"
            size="big"
          >
            {project.user.map(user => (
              <List.Item
                key={user}
              >
                <Image avatar src={avatar} />
                <List.Content>
                  <List.Header>{user}</List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>

        <div>
          <h2>Dates retenues</h2>
          <div id="projectDetails-header-right-dates">
            {`${project.projectDates[0]} au ${project.projectDates[1]}`}
          </div>
        </div>
      </div>

    </div>
    <div
      id="projectDetails-suggestions"
      className="suggestion"
    >
      <div id="projectDetails-suggestions-activity">
        <h2 className="suggestion-title">
          Activité
        </h2>
      </div>
      <div id="projectDetails-suggestions-accomodation">
        <h2 className="suggestion-title">
          Hébergement
        </h2>
      </div>
      <div id="projectDetails-suggestions-transport">
        <h2 className="suggestion-title">
          Transport
        </h2>
      </div>
      <div id="projectDetails-suggestions-restaurant">
        <h2 className="suggestion-title">
          Restaurant
        </h2>
      </div>
      <div id="projectDetails-suggestions-others">
        <h2 className="suggestion-title">
          Autres
        </h2>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default ProjectDetails;
