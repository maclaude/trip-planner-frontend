/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'toasted-notes';

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
  componentDidMount() {
    const { isNotified, notified } = this.props;

    if (!isNotified) {
      toast.notify(
        <p id="toast-alert">
          Une question ? Contactez-nous <a href="mailto:contact@tripplanner.com">ici</a>
        </p>,
        {
          position: 'top-right',
          duration: 4000,
        },
      );

      notified();
    }
  }

  render() {
    const { projects } = this.props;

    return (
      <div id="projects">
        <div id="projects-banner">
          <h1>Mes projets</h1>
        </div>
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
          className="functionality-button functionality-button-create-project"
        >
          <p>Créer un nouveau projet</p>
          <FaPaperPlane />
        </NavLink>
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
  isNotified: PropTypes.bool.isRequired,
  notified: PropTypes.func.isRequired,
};

Projects.defaultProps = {
  projects: [],
};

/**
 * Export
 */
export default Projects;
