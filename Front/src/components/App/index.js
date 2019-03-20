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
// import NavbarProject from 'src/components/Navbar_project';
import NavbarUser from 'src/components/Navbar_user';
// import MyProjects from 'src/components/MyProjects';
// import NewProject from 'src/components/NewProject';
import Availability from 'src/components/Availability';

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
    <Availability />
    {/* <NavbarProject /> */}
    {/* <MyProjects /> */}

  </div>
);

/**
 * Export
 */
export default App;
