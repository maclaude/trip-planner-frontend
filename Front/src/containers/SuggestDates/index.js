/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SuggestDates from 'src/components/SuggestDates';
import { getCurrentProject } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.project.projectsData, params.slug),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const SuggestDatesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestDates);

/**
 * Export
 */
export default SuggestDatesContainer;
