/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Style
import './main.scss';

/**
 * Code
 */
const Main = () => (
  <div id="main">
    <div id="main-banner">
      <div id="main-banner-text">
        <h1 id="main-banner-text-title">Trip-planner</h1>
        <p id="main-banner-text-slogan">Organisez vos voyages entre amis</p>
      </div>
    </div>
    <div id="main-fonctionalities">
      <div id="main-fonctionalities-text-up">
        <h2>Organisez vos voyages entre amis simplement</h2>
        <h2>Soumettez vos idées</h2>
        <h2>Votez pour les idées qui vous plaisent</h2>
      </div>
      <div id="main-fonctionalities-img-up">
        <img
          src="src/assets/images/homepage_img_up.jpg"
          alt="Carte du monde"
        />
      </div>
      <div id="main-fonctionalities-img-down">
        <img
          src="src/assets/images/homepage_img_down.jpg"
          alt="San-francisco bridge"
        />
      </div>
      <div id="main-fonctionalities-text-down">
        <h2>Un espace de discussion dédié pour vous organiser</h2>
        <h2>Bénéficier d'un récapitulatif complet</h2>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Main;
