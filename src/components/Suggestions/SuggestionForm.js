/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Utils
import getSuggestionFormErrors from 'src/utils/suggestion_form_errors';

/**
 * Code
 */
class SuggestionForm extends React.Component {
  /**
   * Handlers
   */
  handleInputChange = evt => {
    const { name, value } = evt.target;

    const { changeInput } = this.props;

    changeInput(name, value);
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const {
      type,
      title,
      addProjectSuggestion,
      showErrors,
    } = this.props;

    // Handling errors
    const errors = getSuggestionFormErrors(type, title);

    if (type && title !== '') {
      addProjectSuggestion();
    }
    else {
      showErrors(errors);
    }
  }

  /**
   * Render
   */
  render() {
    const {
      type,
      title,
      description,
      url,
      price,
      errors,
    } = this.props;

    /* Price label for each suggestion types */

    let priceLabel = 'Prix estimé par personne (€)';

    if (type === '2') {
      priceLabel = 'Prix par nuit et par personne (€)';
    }
    else if (type === '3') {
      priceLabel = 'Prix du trajet (€)';
    }

    return (
      <section className="user-container__section-1" id="suggestions-form">
        <form
          className="form__container"
          onSubmit={this.handleSubmit}
        >
          <div id="suggestions-form-header">

            <h2 id="suggestions-form-header__title">
              Soumettre une idée concernant
            </h2>

            <div id="suggestion-form-header__options">
              <select
                name="type"
                value={type}
                onChange={this.handleInputChange}
                className="field__select"
              >
                <option value={1}>Activité</option>
                <option value={2}>Hébergement</option>
                <option value={3}>Transport</option>
                <option value={4}>Restaurant</option>
                <option value={5}>Autres</option>
              </select>
            </div>
          </div>

          <div id="suggestion-form-inputs">

            <div className="field">
              <label htmlFor="title" className="field__label">
                Titre <strong className="asterisk">*</strong>
              </label>
              <input
                name="title"
                className="field__input"
                placeholder="Titre de votre idée"
                value={title}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="description" className="field__label">
                Description
              </label>
              <textarea
                name="description"
                className="field__input"
                placeholder="Description de votre idée"
                value={description}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="url" className="field__label">
                Lien
              </label>
              <input
                name="url"
                className="field__input"
                placeholder="Ajouter un lien"
                value={url}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="price" className="field__label">
                {priceLabel}
              </label>
              <input
                type="number"
                name="price"
                className="field__input"
                placeholder="Prix"
                value={price}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          {(errors.length > 0) && (
            <div id="suggestions-form-errors">
              {errors.map(error => (
                <div className="form__error" key={error}>
                  <p>{error}</p>
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="
              form__button
              form__button--right
              form__button--grey
            "
            onClick={this.handleSubmit}
          >
            Envoyer
          </button>
        </form>
      </section>
    );
  }
}

// PropTypes validation
SuggestionForm.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  changeInput: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  addProjectSuggestion: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SuggestionForm;
