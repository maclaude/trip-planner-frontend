/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './navigation.scss';
// Components
import NavigationFooter from 'src/containers/Navigation/NavigationFooter';
import NavigationHeader from './NavigationHeader';

/**
 * Code
 */
class Navigation extends React.Component {
  /**
   * Lifecycle
   */
  componentDidMount() {}

  /**
   * Render
   */
  render() {
    const { username } = this.props;

    return (
      <div id="navigation">
        <NavigationHeader username={username} />

        <div id="navigation-main">
          <NavLink
            className="navigation-link"
            to="/nouveau-projet"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Nouveau projet
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            className="navigation-link"
            to="/mes-projets"
            activeClassName="navigation-link--active"
          >
            <div className="navigation-link-title">
              Mes projets
            </div>
            <Icon name="chevron right" />
          </NavLink>
        </div>

        <NavigationFooter />
      </div>
    );
  }
}

// PropTypes validation
Navigation.propTypes = {
  username: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Navigation;
