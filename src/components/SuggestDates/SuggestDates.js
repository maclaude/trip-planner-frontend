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
      <div id="dates">
        <div id="dates-banner">
          <h1>Suggérer des dates</h1>
        </div>
        <div id="dates-container">
          <Form
            id="dates-form"
            action=""
            onSubmit={this.handleSubmit}
          >
            <h2 id="dates-form-title">
              Sélectionner des dates:
            </h2>
            <div id="dates-inputs">
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                name="startDate"
                className="date-input"
                type="date"
                value={startDate}
                onChange={this.handleChange}
              />
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                name="endDate"
                className="date-input"
                type="date"
                value={endDate}
                onChange={this.handleChange}
              />
              <div
                className="
                  functionality-button
                  functionality-button--circular
                  functionality-button-add
                "
                onClick={this.handleSubmit}
              >
                <FaPlus className="functionality-button__icon" />
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
        </div>
        <div id="dates-suggested">
          {suggestedDates.map(date => (
            <div className="dates-suggested--item" key={date._id}>
              <div>
                Du {getDateFormat(date.start_date)} au {getDateFormat(date.end_date)}
              </div>
              <div className="dates-suggested--item-icon">
                <FaTrash />
              </div>
            </div>
          ))}
        </div>
        <UserFooter />
      </div>
    );
  }
}

// PropTypes validation
SuggestDates.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  errors: PropTypes.array.isRequired,
  suggestedDates: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  addProjectDates: PropTypes.func.isRequired,
};

SuggestDates.defaultProps = {
  startDate: '',
  endDate: '',
};

/**
 * Export
 */
export default SuggestDates;
