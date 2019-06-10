/**
 * NPM import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './navigation.scss';
// Components
import NavigationHeader from './navigationHeader';
import NavigationFooter from './navigationFooter';

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
    return (
      <div id="navigation">
        <NavigationHeader />

        <div id="navigation-main">
          <NavLink
            className="navigation-link"
            to="/nouveau-projet"
          >
            <div className="navigation-link-title">
              Nouveau projet
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            className="navigation-link"
            to="/mes-projets"
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

/**
 * Export
 */
export default Navigation;
