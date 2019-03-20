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
import NavbarUser from 'src/components/Navbar_user';
import NewProject from 'src/components/NewProject';

// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div>
    {/* <Header />
    <Main />
    <Footer /> */}
    <NavbarUser />
    <NewProject />

  </div>
);

/**
 * Export
 */
export default App;
