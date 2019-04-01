/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Image,
  List,
  Divider,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './project_details.scss';
// Assets
import avatar from 'src/assets/avatar/default.png';
import newYork from 'src/assets/images/new-york.jpg';
// Components
import Activity from 'src/containers/ProjectDetails/activity';
import Accomodation from 'src/containers/ProjectDetails/accomodation';
import Transport from 'src/containers/ProjectDetails/transport';
import Restaurant from 'src/containers/ProjectDetails/restaurant';
import Other from 'src/containers/ProjectDetails/other';

/**
 * Code
 */
const ProjectDetails = ({ project }) => (
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
            {project.user.map((user, index) => (
              <List.Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
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

    <Divider />

    <div
      id="projectDetails-suggestions"
      className="suggestion"
    >
      <div id="projectDetails-suggestions-activity">
        <h2 className="suggestion-title">Activités</h2>
        <Activity
          type={1}
          projectId={project.id}
          participants={project.user}
        />
      </div>
      <div id="projectDetails-suggestions-accomodation">
        <h2 className="suggestion-title">Hébergement</h2>
        <Accomodation
          type={2}
          projectId={project.id}
          participants={project.user}
        />
      </div>
      <div id="projectDetails-suggestions-transport">
        <h2 className="suggestion-title">Transport</h2>
        <Transport
          type={3}
          projectId={project.id}
          participants={project.user}
        />
      </div>
      <div id="projectDetails-suggestions-restaurant">
        <h2 className="suggestion-title">Restaurant</h2>
        <Restaurant
          type={4}
          projectId={project.id}
          participants={project.user}
        />
      </div>
      <div id="projectDetails-suggestions-others">
        <h2 className="suggestion-title">Autres</h2>
        <Other
          type={5}
          projectId={project.id}
          participants={project.user}
        />
      </div>
    </div>
  </div>
);

// PropTypes validation
ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectDates: PropTypes.array.isRequired,
    user: PropTypes.array.isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default ProjectDetails;
