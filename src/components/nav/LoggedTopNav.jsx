import React from 'react';

import worldIcon from '../../assets/images/icons/globe.svg';
import unrollIcon from '../../assets/images/icons/unroll.svg';
import listIcon from '../../assets/images/icons/list.svg';
import userIcon from '../../assets/images/icons/user.svg';

function LoggedTopNav() {
  return (
    <nav className="topnav">
      <div className="topnav__dropdownone">
        <button type="button" className="topnav__dropdownone-button">
          <img
            className="topnav__dropdownone-button-iconone"
            src={worldIcon}
            alt="icône langues devise"
          />
          <img
            className="topnav__dropdownone-button-icontwo"
            src={unrollIcon}
            alt="icône menu deroulant"
          />
        </button>
        <ul className="topnav__dropdownone-list">
          <li className="topnav__dropdownone-item">
            <a href="#">
              <img
                className="topnav__dropdownone-button-iconone"
                src={worldIcon}
                alt="icône langues devise"
              />
              <p>Français (FR)</p>
            </a>
          </li>
          <li className="topnav__dropdownone-item">
            <a href="#">
              <p>€</p>
              <p>EUR</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="topnav__dropdowntwo">
        <button type="button" className="topnav__dropdowntwo-button">
          <img className="topnav__dropdowntwo-button-iconone" src={listIcon} alt="icône liste" />
          <img
            className="nav__link__icon__profil"
            src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
            alt="utilisateur connecté"
          />
        </button>
        <ul className="topnav__dropdowntwo-list">
          <li className="topnav__dropdowntwo-item">
            <a href="/inbox">Messages</a>
          </li>
          <li className="topnav__dropdowntwo-item">
            <a href="#">Notifications</a>
          </li>
          <li className="topnav__dropdowntwo-item">
            <a href="/bookings">Voyages</a>
          </li>
          <li className="topnav__dropdowntwo-item">
            <a href="/wishlists">Enregistrés</a>
          </li>
          <li className="topnav__dropdowntwo-item">
            <a href="/account-settings">Profil</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LoggedTopNav;
