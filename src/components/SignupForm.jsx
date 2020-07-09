import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const initialInputState = { role: 'host', first_name: '', last_name: '', email: '', password: '' };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { role, firstName, lastName, email, password } = eachEntry;
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  // // const [isFirstName, setFirstName] = useState();
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [isHost, setHost] = useState(null);

  // useEffect(() => {
  //   postSignup();
  // }, []);

  // const postSignup = async () => {
  //   const res = await axios('/api/signin/');
  //   const data = await res.json();
  //   setIsSignedIn(res.data);
  // };

  const handleInputChange = (e) => {
    setEachEntry({
      ...eachEntry,
      [e.target.name]: e.target.value,
    });
    console.log(eachEntry);
  };

  // const handleFinalSubmit = (e) => {
    
  // };

  return (
    <div className="signup__container">
      <h3>Effectuer mon inscription</h3>
      <form method="POST" action="/api/signup">
        <div className="box-radios">
          <div>
            <label htmlFor="Host">
              Hôte
              <input
                type="radio"
                name="role"
                id="Host"
                className="signup__input--host"
                onChange={handleInputChange}
                value={role}
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
                value={role}
              />
            </label>
          </div>
        </div>
        <input
          type="text"
          name="first_name"
          placeholder="Prénom"
          onChange={handleInputChange}
          value={firstName}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Nom"
          onChange={handleInputChange}
          value={lastName}
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handleInputChange}
          value={password}
        />
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
