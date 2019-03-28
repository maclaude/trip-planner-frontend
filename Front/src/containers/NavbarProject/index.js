/**
 * NPM import
 */
import { connect } from 'react-redux';

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
  projects: state.projects.projects,
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
export default NavbarProjectContainer;
