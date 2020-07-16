import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ExplorerIcon } from '../../assets/images/icons/explorer.svg';
import { ReactComponent as EnregistresIcon } from '../../assets/images/icons/enregistres.svg';
import { ReactComponent as ConnexionIcon } from '../../assets/images/icons/connexion.svg';

function GuestBottomNav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        <ExplorerIcon className="nav__link__icon" />
        <span>
          <strong>Explorer</strong>
        </span>
      </Link>
      <Link className="nav__link" to="/wishlists">
        <EnregistresIcon className="nav__link__icon" />
        <span>
          <strong>Enregistres</strong>
        </span>
      </Link>
      <Link className="nav__link" to="/login">
        <ConnexionIcon className="nav__link__icon" />
        <span>
          <strong>Connexion</strong>
        </span>
      </Link>
    </nav>
  );
}

export default GuestBottomNav;
