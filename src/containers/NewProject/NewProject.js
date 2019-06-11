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
  changeProjectInputs,
  showNewProjectErrors,
  newProject,
  addDates,
} from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  title: state.project.title,
  description: state.project.description,
  startDate: state.project.startDate,
  endDate: state.project.endDate,
  suggestedDates: state.project.suggestedDates,
  destination: state.project.destination,
  errors: state.project.errors,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeProjectInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showNewProjectErrors(errors));
  },
  newProject: () => {
    dispatch(newProject());
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
