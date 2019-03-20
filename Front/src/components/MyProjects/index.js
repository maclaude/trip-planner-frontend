/**
 * NPM IMPORT
 */
import React from 'react';
import { Formatizer } from 'formatizer';

/**
 * Local import
 */
import './myprojects.scss';

/**
 * Code
 */
const MyProjects = () => (
  <div id="myprojects">
    <div id="myprojects-banner">
      <h1>Mes projets</h1>
    </div>
    <div id="project-card">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src="src/assets/images/new-york.jpg" alt="Avatar" />
          </div>
          <div className="content">
            <div className="header">New-York</div>
            <div className="meta">Date: 10/07/2019 au 25/07/2019</div>
            <div className="description">Voyage a New-York entre pote</div>
          </div>
          <div className="extra content">
            <span>Statut: terminé </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="src/assets/images/homepage_img_down.jpg" alt="Avatar" />
          </div>
          <div className="content">
            <div className="header">San francisco</div>
            <div className="meta">Date: 10/08/2019 au 25/09/2019</div>
            <div className="description">Voyage a San Francisco</div>
          </div>
          <div className="extra content">
            <span>Statut: Programmé </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="src/assets/images/sweden.jpg" alt="Avatar" />
          </div>
          <div className="content">
            <div className="header">Stockholm</div>
            <div className="meta">Date: 10/12/2019 au 20/12/2019</div>
            <div className="description">
              <Formatizer>
                la suede :hearts:
              </Formatizer>
            </div>
          </div>
          <div className="extra content">
            <span>Statut: En cours </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyProjects;
