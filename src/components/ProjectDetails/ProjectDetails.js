/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  List,
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
import avatar from 'src/assets/avatar/default-user.png';

/**
 * Code
 */
class ProjectDetails extends React.Component {
  /**
   * Lifecycles
   */
  componentDidMount() {}

  /**
   * Render
   */
  render() {
    const { project } = this.props;

    return (
      <div className="user-container" id="project-details">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Récapitulatif</h1>
        </div>

        <section className="user-container__section-1" id="project-details-header">
          <div id="project-details-header-left">
            <h2 className="user-section__title">Localisation</h2>
            <div id="project-details-header-left-map">
              <GoogleMap
                lat={project.destination.lat}
                lng={project.destination.lng}
              />
            </div>
          </div>

          <div id="project-details-header-right">
            <div>
              <h2 className="user-section__title">Description</h2>
              <div id="project-details-header-right-description">
                {project.description}
              </div>
            </div>

            <div>
              <h2 className="user-section__title">Participants</h2>
              <List
                id="project-details-header-right-participants-list"
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
              <h2 className="user-section__title">Dates</h2>
              <div id="project-details-header-right-dates">
                <p>Dates - Notifications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="user-container__section-2" id="project-details-suggestions">
          <div id="project-details-suggestions-activity">
            <h2 className="project-details-title">Activités</h2>
            <Activity
              type={1}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="project-details-suggestions-accomodation">
            <h2 className="suggestion-title">Hébergements</h2>
            <Accomodation
              type={2}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="project-details-suggestions-transport">
            <h2 className="suggestion-title">Transports</h2>
            <Transport
              type={3}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="project-details-suggestions-restaurant">
            <h2 className="suggestion-title">Restaurants</h2>
            <Restaurant
              type={4}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
          <div id="project-details-suggestions-others">
            <h2 className="suggestion-title">Autres</h2>
            <Other
              type={5}
              projectId={project._id}
              participants={project.participants}
            />
          </div>
        </section>

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
    destination: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
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
