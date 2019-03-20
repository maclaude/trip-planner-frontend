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
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />

  </div>
);

/**
 * Export
 */
export default App;
