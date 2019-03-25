/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Example from 'src/components/Example';

// Action Creators
import { doSomething } from 'src/store/reducers/reducerName';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething('Coucou'));
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
