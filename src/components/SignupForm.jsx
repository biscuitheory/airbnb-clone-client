import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useForm from './useForm';
import validate from './ValidateSignup';

const SignupForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

  function submit() {
    console.log('Submitted Succesfully');
  }

  return (
    <div className="signup__container">
      <h3>Effectuer mon inscription</h3>
      <form onSubmit={handleSubmit} noValidate method="POST" action="/api/signup">
        <div className="box-radios">
          <div>
            <label htmlFor="Host">
              Hôte
              <input
                type="radio"
                name="role"
                id="Host"
                className="signup__input--host"
                onChange={handleChange}
                value={values.role}
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
                onChange={handleChange}
                value={values.role}
              />
            </label>
          </div>
        </div>
        <input
          type="text"
          name="first_name"
          placeholder="Prénom"
          onChange={handleChange}
          value={values.firstName}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Nom"
          onChange={handleChange}
          value={values.lastName}
        />
        <div>
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="signup__button">
          S'inscrire
        </button>
      </form>
      <div>
        <p>Vous avez déjà un compte ?</p>
        <Link to="/login">Se connecter</Link>
      </div>
    </div>
  );
};

export default SignupForm;
