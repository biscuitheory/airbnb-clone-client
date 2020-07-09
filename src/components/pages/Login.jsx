import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../../context/auth';

export const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    const res = await axios('/api/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  };

  return (
    <div className="login">
      <form className="login__form">
        <label htmlFor="email">
          <input
            type="text"
            value={data.email}
            onChange={handleInputChange}
            name="email"
            id="email"
            placeHolder="Adresse e-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="password"
            placeHolder="Mot de passe"
          />
        </label>

        {data.errorMessage && <span className="form__error">{data.errorMessage}</span>}

        <button type="button" disabled={data.isSubmitting}>
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

export default Login;
