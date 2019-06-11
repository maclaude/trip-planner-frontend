/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  List,
  Divider,
  Icon,
} from 'semantic-ui-react';
import toast from 'toasted-notes';

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
// Utils
import getDateFormat from 'src/utils/date_format';

/**
 * Code
 */
class ProjectDetails extends React.Component {
  componentDidMount() {
    const { userHasVoted, project } = this.props;

    if (!userHasVoted && project.id === 7) {
      toast.notify(
        <p id="toast-alert">
          <Icon name="bell" color="red" size="large" /> Merci de renseigner vos disponibilités
        </p>,
        {
          position: 'top-right',
          duration: null,
        },
      );
    }
  }

  render() {
    const { project, userHasVoted } = this.props;

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
                lat={project.lat}
                lng={project.lng}
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
                {project.user.length === 0 && (
                  <p>Aucun participant au projet</p>
                )}
                {project.user.length !== 0 && (
                  project.user.map((user, index) => (
                    <List.Item
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                    >
                      <Image avatar src={user.avatar} />
                      <List.Content>
                        <List.Header>{user.firstname}</List.Header>
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
              projectId={project.id}
              participants={project.user}
            />
          </div>
          <div id="projectDetails-suggestions-accomodation">
            <h2 className="suggestion-title">Hébergements</h2>
            <Accomodation
              type={2}
              projectId={project.id}
              participants={project.user}
            />
          </div>
          <div id="projectDetails-suggestions-transport">
            <h2 className="suggestion-title">Transports</h2>
            <Transport
              type={3}
              projectId={project.id}
              participants={project.user}
            />
          </div>
          <div id="projectDetails-suggestions-restaurant">
            <h2 className="suggestion-title">Restaurants</h2>
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
        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectDates: PropTypes.array,
    user: PropTypes.array,
  }),
  userHasVoted: PropTypes.bool.isRequired,
};

ProjectDetails.defaultProps = {
  project: PropTypes.shape({
    projectDates: [],
    user: [],
  }),
};

/**
 * Export
 */
export default ProjectDetails;
