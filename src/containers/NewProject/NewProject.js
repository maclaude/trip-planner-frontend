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
  changeNewProjectInputs,
  showNewProjectErrors,
  getDestinationCoordinates,
  addDates,
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
  responseMessage: state.project.responseMessage,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeNewProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewProjectErrors(errors));
  },
  getDestinationCoordinates: () => {
    dispatch(getDestinationCoordinates());
  },
  addDates: () => {
    dispatch(addDates());
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
