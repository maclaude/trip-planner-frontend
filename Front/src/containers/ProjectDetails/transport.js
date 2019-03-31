/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Transport from 'src/components/ProjectDetails/Transport';

// Action Creators
import { getFilteredTransportSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFilteredTransportSuggestions(
    state.ideas.suggestions,
    ownProps.type,
    ownProps.projectId,
    ownProps.participants,
  ),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const TransportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transport);

/**
 * Export
 */
export default TransportContainer;
