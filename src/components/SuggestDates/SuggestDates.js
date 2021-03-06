/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaTrash } from 'react-icons/fa';

/**
 * Local import
 */
// Utils
import SuggestDatesErrors from 'src/utils/suggest-dates_form_errors';
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
  componentDidMount() {
    const { clearProjectState } = this.props;
    clearProjectState();
  }

  /**
   * Handlers
   */
  handleChange = evt => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleSubmit = evt => {
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
      <div className="user-container" id="dates">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Suggérer des dates</h1>
        </div>

        <section className="user-container__section-1">
          <div id="dates-form">
            <form
              className="form__container"
              onSubmit={this.handleSubmit}
            >
              <h2 id="dates-form__title">
                Choisissez des dates pour votre séjour
              </h2>

              <div id="dates-form__main">

                <div className="field">
                  <label className="field__label dates-form__label">
                    Date de début <span className="asterisk">*</span>
                  </label>
                  <input
                    name="startDate"
                    className="field__date dates-form__input"
                    type="date"
                    value={startDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label className="field__label dates-form__label">
                    Date de fin <span className="asterisk">*</span>
                  </label>
                  <input
                    name="endDate"
                    className="field__date dates-form__input"
                    type="date"
                    value={endDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="dates-form__element">
                  <div
                    className="
                      button
                      button--circular
                      button-add-dates
                    "
                    onClick={this.handleSubmit}
                  >
                    <FaPlus className="button--circular__icon" />
                  </div>
                </div>

              </div>

              {(errors.length > 0) && (
                <div id="dates-form-errors">
                  {errors.map(error => (
                    <div className="form__error" key={error}>
                      <p>
                        {error}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="user-container__section-2" id="dates-suggested">
          {suggestedDates.map(dates => (
            <div className="dates-suggested-item" key={dates._id}>
              <div>
                {/* eslint-disable-next-line max-len */}
                Du <strong>{getDateFormat(dates.start_date)}</strong> au <strong>{getDateFormat(dates.end_date)}</strong>
              </div>
              <div className="dates-suggested-item__icon">
                <FaTrash onClick={this.deleteProjectDates(dates._id)} />
              </div>
            </div>
          ))}
        </section>

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
