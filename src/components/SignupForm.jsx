import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import useForm from './useForm';
import validate from './validators/ValidateSignup';

const SignupForm = () => {
  const { handleInputChange, handleFormSubmit, data, errors } = useForm(submit, validate);
  const history = useHistory();
  async function submit() {
    try {
      const res = await axios.post('https://airbnb-clone-api.herokuapp.com/api/signup', {
        role: data.role,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      });
      if (res) {
        history.push('/login');
      }
    } catch (err) {
      console.log('err from signup', err);
    }
  }

  return (
    <div className="signup">
      <h1>Effectuer mon inscription</h1>
      <form
        onSubmit={handleFormSubmit}
        noValidate
        method="POST"
        action="https://airbnb-clone-api.herokuapp.com/api/signup"
        className="signup__form"
      >
        <div className="signup__box-radios">
          <div>
            <label htmlFor="Host">
              Hôte
              <input
                type="radio"
                name="role"
                id="Host"
                className="signup__input--host"
                onChange={handleInputChange}
                value="Host"
              />
            </label>
          </div>
          <div>
            <label htmlFor="Tourist">
              Touriste
              <input
                type="radio"
                name="role"
                id="Tourist"
                className="signup__input--tourist"
                onChange={handleInputChange}
                value="Tourist"
              />
            </label>
          </div>
        </div>
        <div className="signup__input-name">
          <input
            type="text"
            name="first_name"
            placeholder="Prénom"
            onChange={handleInputChange}
            value={data.firstName}
            className="signup__input-firstname"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Nom"
            onChange={handleInputChange}
            value={data.lastName}
            className="signup__input-lastname"
          />
          <p className="signup__input-comment">
            Assurez-vous qu'il correspond au nom figurant sur votre pièce d'identité.
          </p>
          {errors.first_name && <p className="error">{errors.first_name}</p>}
        </div>
        <div className="signup__input-boxes">
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            onChange={handleInputChange}
            value={data.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <p className="signup__input-comment">
            Nous vous enverrons les confirmations et les reçus de voyage par e-mail.
          </p>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleInputChange}
            value={data.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit" className="signup__button">
            S'inscrire
          </button>
        </div>
      </form>
      <div className="signup__redirect">
        <p>Vous avez déjà un compte ?</p>
        <Link to="/login">Se connecter</Link>
      </div>
    </div>
  );
};

export default SignupForm;
