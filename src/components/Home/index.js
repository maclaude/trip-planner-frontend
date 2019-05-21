/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

// Style
import './home.scss';

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <Header />
    <Main />
    <Footer />
  </div>
);

/**
 * Export
 */
export default Home;
