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


const NotFoundView = () => (
  <div id="notFoundView">
    <div id="container">
      <Header />
      <div id="notFound" />
      <Footer />
    </div>
  </div>

);

/**
 * Export
 */
export default NotFoundView;
