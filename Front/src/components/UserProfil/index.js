/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Store
import store from 'src/store';
import { getProjects } from 'src/store/reducers/createProject';
// Components
import Navbar from 'src/components/Navbar';
import Profil from './Profil';


/**
 * Code
 */
class UserProfil extends React.Component {
  componentDidMount() {
    store.dispatch(getProjects());
  }

  render() {
    return (
      <div>
        <Navbar />
        <Profil />
      </div>
    );
  }
}

/**
 * Export
 */
export default UserProfil;
