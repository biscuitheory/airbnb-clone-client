import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../context/auth';
import useForm from './useForm';
import validate from './ValidateLogin';

const LoginForm = () => {
  const { dispatch } = useContext(AuthContext);
  const { handleInputChange, handleFormSubmit, data, setData, errors } = useForm(submit, validate);

  async function submit() {
    console.log('Submitted');
    try {
      const res = await axios.post('http://localhost:8080/api/signin', {
        email: data.email,
        password: data.password,
      });
      if (res.status === 200) {
        return dispatch({
          type: 'LOGIN',
          payload: res,
        });
      }
      throw res;
    } catch (error) {
      return setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message,
      });
    }
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleFormSubmit} noValidate>
        <label htmlFor="email">
          <input
            type="email"
            value={data.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            placeholder="Adresse e-mail"
            className="form__input"
          />
        </label>
        {errors.email && <p className="form__error">{errors.email}</p>}

        <label htmlFor="password">
          <input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="form__input"
          />
        </label>

        {errors.password && <p className="form__error">{errors.password}</p>}

        <button type="submit" disabled={data.isSubmitting} className="form__submit">
          Connexion
        </button>
      </form>
      <div className="login__redirection">
        <p>Vous n'avez pas de compte ?</p>
        <Link to="/signup">
          <button type="button" className="redirection__button">
            Inscription
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
