/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Example from 'src/components/Ideas/singleCard';

// Action Creators
import { voteOnSuggestion } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  voteOnSuggestion: () => {
    dispatch(voteOnSuggestion(ownProps.id));
  },
});

/**
 * Connect
 */
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

/**
 * Export
 */
export default ExampleContainer;
