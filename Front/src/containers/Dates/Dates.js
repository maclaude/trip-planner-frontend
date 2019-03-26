// npm import
import { connect } from 'react-redux';

// Composant
import Date from 'src/components/CreateProject/Dates';


// === State (Données) ===
const mapStateToProps = state => ({
  debutDates: state.CreateProject.debutDates,
  endDates: state.CreateProject.endDates,
  dateSuggest: state.CreateProject.dateSuggest,
});

// === Dispatch (Actions) ===
const mapDispatchToProps = {};

// Container
const DateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Date);

// Export
export default DateContainer;
