/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
// import PropTypes from 'prop-types';

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
   * Handlers
   */
  handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    // const { changeInput } = this.props;
    // changeInput(name, value);
  }

  /**
   * Render
   */
  render() {
    return (
      <div className="user-container" id="profil">

        <div className="user-container__menu">
          <div className="hamburger" />
        </div>

        <div className="user-container__banner">
          <h1>Profil</h1>
        </div>

        <form className="user-container__section-1 form__container">

          <div className="form__title">Mes informations</div>

          <div className="field">
            <label htmlFor="lastname" className="field__label">
              Nom
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              className="field__input"
              placeholder="Votre nom"
            />
          </div>

          <div className="field">
            <label htmlFor="firstname" className="field__label">
              Prénom
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstname"
              className="field__input"
              placeholder="Votre prénom"
            />
          </div>

          <button className="form__button" type="submit">Modifier</button>
        </form>

        <UserFooter />
      </div>

    );
  }
}

// PropTypes validation
Profil.propTypes = {};

/**
 * Export
 */
export default Profil;
