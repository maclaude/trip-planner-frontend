/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  List,
  Divider,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Style
import './project_details.scss';
// Components
import Activity from 'src/containers/ProjectDetails/Activity';
import Accomodation from 'src/containers/ProjectDetails/Accomodation';
import Transport from 'src/containers/ProjectDetails/Transport';
import Restaurant from 'src/containers/ProjectDetails/Restaurant';
import Other from 'src/containers/ProjectDetails/Other';
import UserFooter from 'src/components/UserFooter';
import GoogleMap from 'src/components/GoogleMap';
// Assets
import avatar from 'src/assets/avatar/maclaude.jpg';

/**
 * Code
 */
class ProjectDetails extends React.Component {
  componentDidMount() {}

  render() {
    const { project } = this.props;

    return (
      <div id="projectDetails">

        <div id="projectDetails-banner">
          <h1>Récapitulatif du projet - {project.title}</h1>
        </div>

        <div id="projectDetails-header">
          <div id="projectDetails-header-left">
            <h2>Destination</h2>
            <div id="projectDetails-header-left-map">
              <GoogleMap
                lat={project.destination.lat}
                lng={project.destination.lng}
              />
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
                {project.participants.length === 0 && (
                  <p>Aucun participant au projet</p>
                )}
                {project.participants.length !== 0 && (
                  project.participants.map(participant => (
                    <List.Item
                      key={participant._id}
                    >
                      <Image avatar src={avatar} />
                      <List.Content>
                        <List.Header>{participant.firstname}</List.Header>
                      </List.Content>
                    </List.Item>
                  ))
                )}
              </List>
            </div>

            <div>
              <h2>Dates retenues</h2>
              <div id="projectDetails-header-right-dates">
                <p>Dates - Notifications</p>
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
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="projectDetails-suggestions-accomodation">
            <h2 className="suggestion-title">Hébergements</h2>
            <Accomodation
              type={2}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="projectDetails-suggestions-transport">
            <h2 className="suggestion-title">Transports</h2>
            <Transport
              type={3}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="projectDetails-suggestions-restaurant">
            <h2 className="suggestion-title">Restaurants</h2>
            <Restaurant
              type={4}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="projectDetails-suggestions-others">
            <h2 className="suggestion-title">Autres</h2>
            <Other
              type={5}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
        </div>
        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
ProjectDetails.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dates: PropTypes.array,
    participants: PropTypes.array,
  }),
};

ProjectDetails.defaultProps = {
  project: PropTypes.shape({
    dates: [],
    participants: [],
  }),
};

/**
 * Export
 */
export default ProjectDetails;
