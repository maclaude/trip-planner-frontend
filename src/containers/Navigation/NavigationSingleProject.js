/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavigationSingleProject from 'src/components/Navigation/NavigationSingleProject';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  username: state.user.firstname,
  userRole: state.project.userRole,
});

// === Actions ===
const mapDispatchToProps = null;

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
