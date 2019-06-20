/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavigationFooter from 'src/components/Navigation/NavigationFooter';

// Action Creators
import { disconnectUser } from 'src/store/reducers/authentication';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuth,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
});

/**
 * Connect
 */
const NavigationFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationFooter);

/**
 * Export
 */
export default NavigationFooterContainer;
