/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Suggestions from 'src/components/Suggestions';
import { getCurrentProject } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.user.projects, params.slug),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const SuggestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Suggestions);

/**
 * Export
 */
export default SuggestionsContainer;
