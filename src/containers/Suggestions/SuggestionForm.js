/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SuggestionForm from 'src/components/Suggestions/SuggestionForm';

// Action Creators
import {
  changeSuggestionInputs,
  showSuggestionFormErrors,
  addProjectSuggestion,
} from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  type: state.suggestions.type,
  title: state.suggestions.title,
  description: state.suggestions.description,
  url: state.suggestions.url,
  price: state.suggestions.price,
  errors: state.suggestions.errors,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (name, value) => {
    dispatch(changeSuggestionInputs(name, value));
  },
  showErrors: errors => {
    dispatch(showSuggestionFormErrors(errors));
  },
  addProjectSuggestion: () => {
    dispatch(addProjectSuggestion(ownProps.project._id));
  },
});

/**
 * Connect
 */
const SuggestionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuggestionForm);

/**
 * Export
 */
export default SuggestionFormContainer;
