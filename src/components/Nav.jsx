import React from 'react';

import { ReactComponent as Icon0 } from '../assets/images/icons/svg0.svg';
import { ReactComponent as Icon1 } from '../assets/images/icons/svg1.svg';
import { ReactComponent as Icon2 } from '../assets/images/icons/svg2.svg';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <a className="nav__link" href="/">
          <Icon0 className="nav__icon" />
          <span>Explorer</span>
        </a>
        <a className="nav__link" href="/">
          <Icon1 className="nav__icon" />
          <span>Enregistrés</span>
        </a>
        <a className="nav__link" href="/">
          <Icon2 className="nav__icon" />
          <span>Connexion</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
