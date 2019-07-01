/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { FaPaperPlane } from 'react-icons/fa';

/**
 * Local import
 */
// Styles
import './projects.scss';
import 'toasted-notes/src/styles.css';
// Components
import UserFooter from 'src/components/UserFooter';
import SingleProjectCard from './SingleProjectCard';

/**
 * Code
 */
class Projects extends React.Component {
  /**
   * Lifecycles
   */
  componentWillMount() {
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
      <main className="user-main" id="projects">

        <h1 className="user-main__title">Mes projets</h1>

        {(invitations.length !== 0) && (
        <section id="projects-invitations">
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

        {(projects.length === 0) && (
          <p id="projects-information">Vous n'avez aucun projet en cours</p>
        )}

        {(projects.length !== 0) && (
          <Card.Group
            id="projects-cards"
          >
            {(projects.map(project => (
              <SingleProjectCard
                key={project._id}
                {...project}
              />
            )))}
          </Card.Group>
        )}

        <NavLink
          to="/nouveau-projet"
          className="
            button
            button--large
            button-create-project
          "
        >
          <p>Créer un nouveau projet</p>
          <FaPaperPlane />
        </NavLink>

        <UserFooter />
      </main>
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
