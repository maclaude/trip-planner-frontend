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
import uuidV4 from 'uuid-v4';

/**
 * Local import
 */
// Utils
import SuggestDatesErrors from 'src/utils/dateSuggest_form';
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
      debutDates,
      endDates,
      showErrors,
    } = this.props;

    const dateErrors = SuggestDatesErrors(
      debutDates,
      endDates,
    );
    if (debutDates && endDates !== '') {
      addDates();
    }
    else {
      showErrors(dateErrors);
    }
  };

  handleClick = () => {
    const {
      addDates,
      debutDates,
      endDates,
      showErrors,
    } = this.props;

    const dateErrors = SuggestDatesErrors(
      debutDates,
      endDates,
    );
    if (debutDates && endDates !== '') {
      addDates();
    }
    else {
      showErrors(dateErrors);
    }
  };

  render() {
    const {
      debutDates,
      endDates,
      errors,
      dateSuggest,
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
                name="debutDates"
                className="input-date"
                type="date"
                value={debutDates}
                onChange={this.handleChange}
              />
              <Input
                label={{ icon: 'asterisk' }}
                labelPosition="left corner"
                name="endDates"
                className="input-date"
                type="date"
                value={endDates}
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
          {dateSuggest.map(date => (
            <div className="date focus-in-contract-bck" key={uuidV4()}>
              <p>
                {`Du ${getDateFormat(date.date_de_debut)} au ${getDateFormat(date.date_de_fin)}`}
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
  debutDates: PropTypes.string,
  endDates: PropTypes.string,
  changeInput: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  showErrors: PropTypes.func.isRequired,
  addDates: PropTypes.func.isRequired,
  dateSuggest: PropTypes.array.isRequired,
};

SuggestDates.defaultProps = {
  debutDates: '',
  endDates: '',
};

/**
 * Export
 */
export default SuggestDates;
