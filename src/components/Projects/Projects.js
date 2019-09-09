/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Styles
import './projects.scss';
import 'toasted-notes/src/styles.css';
// Components
import UserFooter from 'src/components/UserFooter';
import SingleProjectCard from 'src/containers/Projects/SingleProjectCard';

/**
 * Code
 */
class Projects extends React.Component {
  /**
   * Lifecycles
   */
  componentDidMount() {
    const { getUserInvitations } = this.props;
    getUserInvitations();
  }

  /**
   * Handlers
   */
  sendInvitationResponse = (projectId, response) => () => {
    const { postUserInvitationResponse } = this.props;
    postUserInvitationResponse(response, projectId);
  }

  /**
   * Render
   */
  render() {
    const { projects, invitations } = this.props;

    return (
      <div className="user-container" id="projects">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Mes projets</h1>
        </div>

        {(invitations.length !== 0) && (
        <section className="user-container__section-1" id="projects-invitations">
          <h2 id="projects-invitations__title">Invitations reçues</h2>
          <div>
            {(invitations.map(invitation => (
              <div className="projects-invitation" key={invitation._id}>
                <div className="projects-invitation__title">{invitation.title}</div>
                <div
                  className="
                    projects-invitation__button
                    projects-invitation__button--decline
                  "
                  onClick={this.sendInvitationResponse(invitation._id, 'declined')}
                >
                  Refuser
                </div>
                <div
                  className="
                    projects-invitation__button
                    projects-invitation__button--accept
                  "
                  onClick={this.sendInvitationResponse(invitation._id, 'accepted')}
                >
                  Accepter
                </div>
              </div>
            )))}
          </div>
        </section>
        )}

        {(projects.length === 0) && (invitations.length === 0) && (
          <div className="user-container__section-1" id="projects-information">
            <p>Vous n'avez aucun projet en cours</p>
          </div>
        )}

        {(projects.length !== 0) && (
          <section
            id="projects-cards"
            className="user-container__section-1"
          >
            {(projects.map(project => (
              <SingleProjectCard
                key={project._id}
                {...project}
              />
            )))}
          </section>
        )}

        <div className="user-container__section-2">
          <NavLink
            to="/nouveau-projet"
            className="
              button
              button--large
              button-new-project
            "
          >
            <p>Créer un nouveau projet</p>
          </NavLink>
        </div>

        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ),
  invitations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
  getUserInvitations: PropTypes.func.isRequired,
  postUserInvitationResponse: PropTypes.func.isRequired,
};

Projects.defaultProps = {
  projects: [],
  invitations: [],
};

/**
 * Export
 */
export default Projects;
