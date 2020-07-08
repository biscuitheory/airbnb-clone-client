import React from 'react';

import { ReactComponent as Explorer } from '../assets/images/icons/explorer.svg';
import { ReactComponent as Enregistres } from '../assets/images/icons/enregistres.svg';
import { ReactComponent as Connexion } from '../assets/images/icons/connexion.svg';
import { ReactComponent as Voyages } from '../assets/images/icons/voyages.svg';

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
        <a className="nav__link" href="/">
          <Connexion className="nav__icon" />
          <span>Connexion</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
