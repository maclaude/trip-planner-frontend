/**
 * NPM import
 */
import React from 'react';
import { Image } from 'semantic-ui-react';

/**
 * Local import
 */
// Components

// styles
import './UserProfil.scss';


/**
 * Code
 */
const Profil = () => (
  <div id="profil">
    <h1>Bienvenue</h1>
    <div id="profil-main">
      <div id="profil-avatar">
        <Image src="src/assets/avatar/default.png" size="medium" circular />
        <h2>Modifier mon avatar</h2>
      </div>
      <div id="profil-username">
        <h2>Modifier mon pseudo</h2>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default Profil;