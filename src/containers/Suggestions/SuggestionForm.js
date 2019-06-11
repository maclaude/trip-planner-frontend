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
  changeSuggestionType,
  showSuggestionErrors,
  sendSuggestion,
} from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  type: state.suggestions.type,
  name: state.suggestions.name,
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
  changeType: (value) => {
    dispatch(changeSuggestionType(value));
  },
  showErrors: (errors) => {
    dispatch(showSuggestionErrors(errors));
  },
  sendSuggestion: () => {
    dispatch(sendSuggestion(ownProps.project.id));
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
