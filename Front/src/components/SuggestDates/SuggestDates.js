/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Input,
  Form,
  Message,
} from 'semantic-ui-react';

/**
 * Local import
 */
// Utils
import SuggestDatesErrors from 'src/utils/suggestDates_form_errors';
import getDateFormat from 'src/utils/date_format';
// Components
import UserFooter from 'src/components/UserFooter';

/**
 * Code
 */

class SuggestDates extends React.Component {
  handleChange = (evt) => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const {
      addDates,
      startDate,
      endDate,
      showErrors,
    } = this.props;

    const dateErrors = SuggestDatesErrors(
      startDate,
      endDate,
    );
    if (startDate && endDate !== '') {
      addDates();
    }
    else {
      showErrors(dateErrors);
    }
  };

  handleClick = () => {
    const {
      addDates,
      startDate,
      endDate,
      showErrors,
    } = this.props;

    const dateErrors = SuggestDatesErrors(
      startDate,
      endDate,
    );
    if (startDate && endDate !== '') {
      addDates();
    }
    else {
      showErrors(dateErrors);
    }
  };

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
              Definissez des suggestions de dates
            </h2>
            <div id="dates-input">
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                name="startDate"
                className="input-date"
                type="date"
                value={startDate}
                onChange={this.handleChange}
              />
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                name="endDate"
                className="input-date"
                type="date"
                value={endDate}
                onChange={this.handleChange}
              />
              <Button
                type="button"
                color="green"
                icon
                className="date-button"
              >
                <Icon
                  name="plus"
                  onClick={this.handleClick}
                />
              </Button>
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
          {suggestedDates.map((date, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="date focus-in-contract-bck" key={index}>
              <p>
                {`Du ${getDateFormat(date.startDate)} au ${getDateFormat(date.endDate)}`}
              </p>
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
  changeInput: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  showErrors: PropTypes.func.isRequired,
  addDates: PropTypes.func.isRequired,
  suggestedDates: PropTypes.array.isRequired,
};

SuggestDates.defaultProps = {
  startDate: '',
  endDate: '',
};

/**
 * Export
 */
export default SuggestDates;
