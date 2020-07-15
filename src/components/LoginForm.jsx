import React, { useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../context/auth';
import useLoginForm from './useLoginForm';
import validate from './ValidateLogin';

const LoginForm = () => {
  const { dispatch } = useContext(AuthContext);
  const { handleInputChange, handleFormSubmit, data, setData, errors } = useLoginForm(
    submit,
    validate
  );

  async function submit() {
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
      console.log(error);
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
          />
        </label>

        {errors.password && <p className="form__error">{errors.password}</p>}

        <button onClick={submit} type="submit" disabled={data.isSubmitting}>
          {data.isSubmitting ? 'Authentification...' : 'Se connecter'}
        </button>
      </form>
      <div>
        <p>Vous n'avez pas de compte ?</p>
        <button type="button">Inscription</button>
      </div>
    </div>
  );
};

export default LoginForm;
