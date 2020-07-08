import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className="signup__container">
      <h3>Effectuer mon inscription</h3>
      <form method="POST" action="/api/signup">
        <div className="box-radios">
          <div>
            <label htmlFor="Host">
              Hôte
              <input type="radio" name="role" id="Host" className="signup__input--host" />
            </label>
          </div>
          <div>
            <label htmlFor="Tourist">
              Touriste
              <input
                type="radio"
                name="role"
                id="Tourist"
                className="tourist__input--tourist"
                value="Touriste"
              />
            </label>
          </div>
        </div>
        <input type="text" name="first_name" placeholder="Prénom" />
        <input type="text" name="last_name" placeholder="Nom" />
        <input type="email" placeholder="Adresse e-mail" />
        <input type="password" placeholder="Mot de passe" />
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
