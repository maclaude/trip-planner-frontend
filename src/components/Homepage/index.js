/* eslint-disable max-len */
/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Style
import './homepage.scss';

/**
 * Code
 */
class HomeView extends React.Component {
  componentDidMount() {
    const faders = document.querySelectorAll('.fade-in');

    // Columns observer
    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -200px 0px',
    };

    // eslint-disable-next-line no-shadow
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }

  render() {
    return (
      <div id="homepage">
        <header className="home-header">
          <NavLink to="/" exact className="home-header__logo" href="#">Trip-planner</NavLink>
          <nav className="acount">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink to="/inscription" exact className="nav__link nav__link--btn">Inscription</NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink to="/connexion" exact className="nav__link nav__link--btn nav__link--btn--highlight">Connexion</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <section className="home-intro">
            <h1 className="home-intro__title">
              Planifier facilement vos prochains voyages
            </h1>
          </section>
          <div className="home-about">
            <h2 className="home-about__title">Les fonctionnalités</h2>
            <div className="columns">
              <div className="col fade-in">
                <h3>Trouver des disponibilités</h3>
                <p>
                  Suggérer des dates pour votre séjour, voter pour les dates ou vous êtes disponibles, trouver une disponibilité qui convient à tout le monde.
                </p>
              </div>
              <div className="col fade-in">
                <h3>Suggérer des idées</h3>
                <p>
                  Proposez des idées pour votre voyage. Les participants peuvent ensuite approuvé les suggestions émisent par les membres du groupe.
                </p>
              </div>
              <div className="col fade-in">
                <h3>Planifier vos étapes</h3>
                <p>
                  Inscrivez sur une carte les différentes étapes de votre itinéraire, ajoutez-y des informations, partager-les avec vos amis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


/**
 * Export
 */
export default HomeView;
