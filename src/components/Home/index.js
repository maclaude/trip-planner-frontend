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
import './home.scss';

/**
 * Code
 */
const HomeView = () => (
  <div id="homepage">
    <div className="home-header">
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
    </div>

    <main>
      <section className="home-intro">
        <h1>Planifier facilement vos prochains voyages</h1>
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
              Inscrivez sur une carte les différente étapes de votre itinéraire, ajoutez-y des informations, partager-les ensuite avec vos amis.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

/**
 * Export
 */
export default HomeView;
