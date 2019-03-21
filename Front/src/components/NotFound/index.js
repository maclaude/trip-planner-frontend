/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Style
import './notfound.scss';

/**
 * Code
 */
const NotFound = () => (
  <>
    <Header />
    <div id="notFound">
      <h1 id="notFound-title">Page non trouvée</h1>
      <p id="notFound-code">404</p>
    </div>
    <Footer />
  </>
);

/**
 * Export
 */
export default NotFound;
