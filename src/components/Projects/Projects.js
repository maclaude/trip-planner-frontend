/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
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
          duration: null,
        },
      );

      notified();
    }
  }

  render() {
    const { projects, userHasVoted } = this.props;

    return (
      <div id="projects">
        <div id="projects-banner">
          <h1>Mes projets</h1>
        </div>
        <Card.Group
          id="projects-cards"
        >
          {projects.map(project => (
            <SingleProjectCard
              key={project.id}
              {...project}
              userHasVoted={userHasVoted}
            />
          ))}
        </Card.Group>
        <div id="projects-create">
          <NavLink
            to="/nouveau-projet"
            className="item"
          >
            Créer un nouveau projet
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isNotified: PropTypes.bool.isRequired,
  notified: PropTypes.func.isRequired,
  userHasVoted: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Projects;
