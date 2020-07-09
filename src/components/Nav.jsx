import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Explorer } from '../assets/images/icons/explorer.svg';
import { ReactComponent as Enregistres } from '../assets/images/icons/enregistres.svg';
import { ReactComponent as Connexion } from '../assets/images/icons/connexion.svg';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <a className="nav__link" href="/">
          <Explorer className="nav__icon" />
          <span>Explorer</span>
        </a>
        <a className="nav__link" href="/">
          <Enregistres className="nav__icon" />
          <span>Enregistrés</span>
        </a>
        <Link className="nav__link" to="/login">
          <Connexion className="nav__icon" />
          <span>Connexion</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
