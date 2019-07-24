/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Profil from 'src/components/Profil/Profil';

// Action Creators
import {
  changeUserProfilInputs,
  updateUserInformations,
  getUserInformations,
} from 'src/store/reducers/user';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  avatar: state.user.avatar,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeUserProfilInputs(name, value));
  },
  updateUserInformations: () => {
    dispatch(updateUserInformations());
  },
  getUserInformations: () => {
    dispatch(getUserInformations());
  },
});

/**
 * Connect
 */
const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

/**
 * Export
 */
export default ProfilContainer;
