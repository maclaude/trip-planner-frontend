/**
 * NPM import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Components
import NavbarProject from 'src/components/NavbarProject';
// Action Creators

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  projects: state.project.projectsData,
  user: state.login.user,
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const NavbarProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarProject);

/**
 * Export
 */
export default withRouter(NavbarProjectContainer);
