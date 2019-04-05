/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Store
import store from 'src/store';
import { getUserInfo } from 'src/store/reducers/login';
import { getProjects } from 'src/store/reducers/createProject';
import { getSuggestions } from 'src/store/reducers/ideas';
// Components
import Navbar from 'src/containers/Navbar';
import Profil from './Profil';


/**
 * Code
 */
class UserProfil extends React.Component {
  componentDidMount() {
    store.dispatch(getProjects());
    store.dispatch(getUserInfo());
    store.dispatch(getSuggestions());
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
