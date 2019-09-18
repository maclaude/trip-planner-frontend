/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/AuthHeader';

// Style
import './notfound.scss';

/**
 * Code
 */


const NotFoundView = () => (
  <div id="not-found-view">
    <Header />
    <div id="not-found-view__message">
      <h1>Page not found</h1>
      <p>Cette fonctionnalité est actuellement en cours de dévelopement <span role="img" aria-label="tool">&#128736;</span></p>
    </div>
  </div>

);

/**
 * Export
 */
export default NotFoundView;
