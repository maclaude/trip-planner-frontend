/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import NewProject from 'src/components/NewProject/NewProject';

// Action Creators
import {
  clearProjectState,
  changeNewProjectInputs,
  showNewProjectErrors,
  getDestinationCoordinates,
} from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  title: state.project.title,
  description: state.project.description,
  destination: state.project.destination,
  errors: state.project.errors,
  serverResponseMessage: state.project.serverResponseMessage,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  clearProjectState: () => {
    dispatch(clearProjectState());
  },
  changeInput: (name, value) => {
    dispatch(changeNewProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewProjectErrors(errors));
  },
  getDestinationCoordinates: () => {
    dispatch(getDestinationCoordinates());
  },
});

/**
 * Connect
 */
const NewProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProject);

/**
 * Export
 */
export default NewProjectContainer;
