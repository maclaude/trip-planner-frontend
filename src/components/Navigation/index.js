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
    const burgerMenu = document.querySelector('.user-container__menu');
    const navigation = document.querySelector('#navigation');
    const closeButton = document.querySelector('#navigation-header__button');

    this.calcWindowSize();

    window.addEventListener('resize', this.calcWindowSize(burgerMenu, navigation));
    burgerMenu.addEventListener('click', this.onBurgerMenuClick(navigation));
    closeButton.addEventListener('click', this.onCloseButtonClick(navigation));
  }

  /**
   * Handlers
   */
  calcWindowSize = (burgerMenu, navigation) => () => {
    const userView = document.querySelector('.user-container');
    navigation.classList.remove('navigation--appear');

    if (window.innerWidth <= 900) {
      navigation.classList.add('navigation--close');
      userView.classList.add('user-container--fullscreen');
      burgerMenu.classList.add('user-container__menu--appear');
    }
    else if (window.innerWidth > 900) {
      burgerMenu.classList.remove('user-container__menu--appear');
      navigation.classList.remove('navigation--close');
      userView.classList.remove('user-container--fullscreen');
    }
  }

  onBurgerMenuClick = navigation => () => {
    navigation.classList.toggle('navigation--appear');
    navigation.classList.add('navigation-close-icon');
  }

  onCloseButtonClick = navigation => () => {
    navigation.classList.remove('navigation--appear');
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
