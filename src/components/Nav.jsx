import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Explorer } from '../assets/images/icons/explorer.svg';
import { ReactComponent as Enregistres } from '../assets/images/icons/enregistres.svg';
import { ReactComponent as Connexion } from '../assets/images/icons/connexion.svg';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <a className="nav__links__link__explorer" href="/">
          <Explorer className="nav__links__link__icon" />
          <span>
            <strong>Explorer</strong>
          </span>
        </a>
        <a className="nav__links__link__enregistres" href="/">
          <Enregistres className="nav__links__link__icon" />
          <span>
            <strong>Enregistrés</strong>
          </span>
        </a>
        <Link className="nav__links__link__connexion" to="/login">
          <Connexion className="nav__links__link__icon" />
          <span>
            <strong>Connexion</strong>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
