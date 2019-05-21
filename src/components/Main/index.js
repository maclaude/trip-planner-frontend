/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Style
import './main.scss';
// Assets
import worldMap from 'src/assets/images/homepage_img_up.jpg';
import sanFrancisco from 'src/assets/images/homepage_img_down.jpg';

/**
 * Code
 */
const Main = () => (
  <div id="main">
    <div id="main-banner" />
    <div id="main-fonctionalities">
      <div id="main-fonctionalities-text-up">
        <h2>Organisez vos voyages entre amis simplement</h2>
        <h2>Soumettez vos idées</h2>
        <h2>Votez pour les idées qui vous plaisent</h2>
      </div>
      <div id="main-fonctionalities-img-up">
        <img
          src={worldMap}
          alt="Carte du monde"
        />
      </div>
      <div id="main-fonctionalities-img-down">
        <img
          src={sanFrancisco}
          alt="San-francisco bridge"
        />
      </div>
      <div id="main-fonctionalities-text-down">
        <h2>Un espace de discussion dédié à votre groupe</h2>
        <h2>Bénéficiez d'un récapitulatif complet</h2>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Main;
