import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ExplorerIcon } from '../../assets/images/icons/explorer.svg';
import { ReactComponent as EnregistresIcon } from '../../assets/images/icons/enregistres.svg';
import { ReactComponent as VoyagesIcon } from '../../assets/images/icons/voyages.svg';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';

function LoggedBottomNav() {
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
          <strong>Enregistrés</strong>
        </span>
      </Link>
      <Link className="nav__link" to="/bookings">
        <VoyagesIcon className="nav__link__icon" />
        <span>
          <strong>Voyages</strong>
        </span>
      </Link>
      <Link className="nav__link" to="/inbox">
        <MessagesIcon className="nav__link__icon" />
        <span>
          <strong>Messages</strong>
        </span>
      </Link>

      <Link className="nav__link" to="/account-settings">
        <img
          className="nav__link__icon__profil"
          src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
          alt="nome d'utilisateur"
        />
        <span>
          <strong>Profil</strong>
        </span>
      </Link>
    </nav>
  );
}

export default LoggedBottomNav;
