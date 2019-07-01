/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NavigationSingleProject from 'src/components/Navigation/NavigationSingleProject';

// Action Creators
import { getProjectUserRole } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  username: state.user.firstname,
  userRole: state.project.userRole,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  getProjectUserRole: () => {
    dispatch(getProjectUserRole(ownProps.project._id));
  },
});

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
