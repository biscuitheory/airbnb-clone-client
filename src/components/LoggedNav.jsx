import React from 'react';

import { ReactComponent as Explorer } from '../assets/images/icons/explorer.svg';
import { ReactComponent as Enregistres } from '../assets/images/icons/enregistres.svg';
import { ReactComponent as Voyages } from '../assets/images/icons/voyages.svg';
import { ReactComponent as Messages } from '../assets/images/icons/messages.svg';

function LoggedNav() {
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
          <Voyages className="nav__icon" />
          <span>Voyages</span>
        </a>
        <a className="nav__link" href="/">
          <Messages className="nav__icon" />
          <span>Messages</span>
        </a>
        <a className="nav__link" href="/">
          <Voyages className="nav__icon" />
          <span>Profil</span>
        </a>
      </div>
    </nav>
  );
}

export default LoggedNav;
