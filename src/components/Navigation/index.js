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
  componentDidMount() {
    this.calcWindowSize();
    window.addEventListener('resize', this.calcWindowSize);
  }

  /**
   * Handlers
   */
  calcWindowSize = () => {
    const navigation = document.querySelector('#navigation');
    const userView = document.querySelector('.user-main');

    if (window.innerWidth <= 900) {
      navigation.classList.add('navigation--close');
      userView.classList.add('user-main--fullscreen');
    }
    else if (window.innerWidth > 900) {
      navigation.classList.remove('navigation--close');
      userView.classList.remove('user-main--fullscreen');
    }
  }

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
            className="navigation__link"
            to="/nouveau-projet"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
              Nouveau projet
            </div>
            <Icon name="plus" />
          </NavLink>
          <NavLink
            className="navigation__link"
            to="/mes-projets"
            activeClassName="navigation__link--active"
          >
            <div className="navigation__link-title">
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
