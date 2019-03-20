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
import Signup from 'src/components/Signup';
import Login from 'src/components/Login';
import Navbar from 'src/components/Navbar';
import NavbarProject from 'src/components/Navbar_project';
import NavbarUser from 'src/components/Navbar_user';
import MyProjects from 'src/components/MyProjects';
import NewProject from 'src/components/NewProject';
import ProjectDetails from 'src/components/ProjectDetails';
import Availability from 'src/components/Availability';

// Style
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Header />
    <Signup />
    {/* <Main /> */}
    <Footer />
    {/* <Navbar /> */}
    {/* <NavbarProject /> */}
    {/* <NavbarUser /> */}
    {/* <ProjectDetails /> */}
    {/* <MyProjects /> */}
    {/* <NewProject /> */}
    {/* <Availability /> */}

  </div>
);

/**
 * Export
 */
export default App;
