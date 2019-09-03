/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles
import './profil.scss';
// Components
import UserFooter from 'src/components/UserFooter';

/**
 * Code
 */
class Profil extends React.Component {
  /**
   * Lifecycles
   */
  componentWillUnmount() {
    const { getUserInformations } = this.props;
    getUserInformations();
  }

  /**
   * Handlers
   */
  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleFileChange = (evt) => {
    const { name, files } = evt.target;
    const value = files[0];

    const { changeInput } = this.props;
    changeInput(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { updateUserInformations } = this.props;
    updateUserInformations();
  }

  /**
   * Render
   */
  render() {
    const {
      lastname,
      firstname,
      email,
    } = this.props;

    return (
      <div className="user-container" id="profil">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Profil</h1>
        </div>

        <form
          className="user-container__section-1 form__container"
        >

          <div className="form__title">Mes informations</div>

          <div className="field">
            <label htmlFor="firstname" className="field__label">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              className="field__input"
              placeholder="Votre prénom"
              value={firstname}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="lastname" className="field__label">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              className="field__input"
              placeholder="Votre nom"
              value={lastname}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="field__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="field__input"
              placeholder="Votre email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="field__label">
              Avatar
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="avatar"
              className="field__input--file"
              onChange={this.handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="form__button"
            onClick={this.handleSubmit}
          >
            Modifier
          </button>
        </form>

        <UserFooter />
      </div>

    );
  }
}

// PropTypes validation
Profil.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  updateUserInformations: PropTypes.func.isRequired,
  getUserInformations: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Profil;
