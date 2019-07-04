/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Form,
  Message,
} from 'semantic-ui-react';
import { FaPlus, FaTrash } from 'react-icons/fa';

/**
 * Local import
 */
// Utils
import SuggestDatesErrors from 'src/utils/suggestdates_form_errors';
import { getDateFormat } from 'src/utils/date_format';
// Components
import UserFooter from 'src/components/UserFooter';

/**
 * Code
 */
class SuggestDates extends React.Component {
  /**
   * Lifecycle
   */
  componentWillMount() {
    const { clearProjectState } = this.props;
    clearProjectState();
  }

  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      addProjectDates,
      startDate,
      endDate,
      showErrors,
    } = this.props;

    const errors = SuggestDatesErrors(
      startDate,
      endDate,
    );

    if (errors.length === 0) {
      addProjectDates();
    }
    else {
      showErrors(errors);
    }
  };

  deleteProjectDates = datesId => () => {
    const { deleteDates } = this.props;
    deleteDates(datesId);
  }

  /**
   * Render
   */
  render() {
    const {
      startDate,
      endDate,
      errors,
      suggestedDates,
    } = this.props;

    return (
      <main className="user-main" id="dates">

        <h1 className="user-main__title">Suggérer des dates</h1>

        <section>
          <Form
            id="dates-form"
            action=""
            onSubmit={this.handleSubmit}
          >
            <h2 id="dates-form__title">
              Sélectionner des dates:
            </h2>
            <div id="dates-form__inputs">
              <div>
                <h3 className="date-form__label">Date de début</h3>
                <Input
                  label={{ icon: 'asterisk' }}
                  labelPosition="left corner"
                  name="startDate"
                  className="date-form__input"
                  type="date"
                  value={startDate}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <h3 className="date-form__label">Date de fin</h3>
                <Input
                  label={{ icon: 'asterisk' }}
                  labelPosition="left corner"
                  name="endDate"
                  className="date-form__input"
                  type="date"
                  value={endDate}
                  onChange={this.handleChange}
                />
              </div>
              <div
                className="
                  button
                  button--circular
                  button-add
                "
                onClick={this.handleSubmit}
              >
                <FaPlus className="button__icon" />
              </div>
            </div>

            {(errors.length > 0) && (
            <div id="dates-form-errors">
              {errors.map(error => (
                <Message negative key={error}>
                  <p>
                    {error}
                  </p>
                </Message>
              ))}
            </div>
            )}

          </Form>
        </section>

        <section id="dates-suggested">
          {suggestedDates.map(dates => (
            <div className="dates-suggested-item" key={dates._id}>
              <div>
                Du {getDateFormat(dates.start_date)} au {getDateFormat(dates.end_date)}
              </div>
              <div className="dates-suggested-item__icon">
                <FaTrash onClick={this.deleteProjectDates(dates._id)} />
              </div>
            </div>
          ))}
        </section>

        <UserFooter />

      </main>
    );
  }
}

// PropTypes validation
SuggestDates.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  errors: PropTypes.array.isRequired,
  suggestedDates: PropTypes.array.isRequired,
  clearProjectState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  addProjectDates: PropTypes.func.isRequired,
  deleteDates: PropTypes.func.isRequired,
};

SuggestDates.defaultProps = {
  startDate: '',
  endDate: '',
};

/**
 * Export
 */
export default SuggestDates;
