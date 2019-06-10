/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavigationSingleProject from 'src/components/Navigation/navigationSingleProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  user: state.login.user,
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const NavigationSingleProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationSingleProject);

/**
 * Export
 */
export default NavigationSingleProjectContainer;
