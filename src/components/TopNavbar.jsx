import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import ModalSignup from './ModalSignup';
import worldIcon from '../assets/images/icons/globe.svg';
import unrollIcon from '../assets/images/icons/unroll.svg';
import listIcon from '../assets/images/icons/list.svg';
import userIcon from '../assets/images/icons/user.svg';

Modal.setAppElement('#root');

function TopNavbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <nav className="topnav">
        <ul className="topnav__dropnavone">
          <li>
            <a>
              <img className="topnav__dropnavone-icon" src={worldIcon} alt="icône langues devise" />
              <img
                className="topnav__dropnavone-icon-bis"
                src={unrollIcon}
                alt="icône déroule menu"
              />
            </a>

            <ul className="topnav__dropdown">
              <li>
                <a href="#">
                  <img
                    className="topnav__dropnavone-icon"
                    src={worldIcon}
                    alt="icône langues devise"
                  />
                  Français (FR)
                </a>
              </li>
              <li>
                <a href="#">€ EUR</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="topnav__dropnavtwo">
          <li>
            <a>
              <img className="topnav__dropnavtwo-icon" src={listIcon} alt="icône langues devise" />
              <img className="topnav__dropnavtwo-icon-bis" src={userIcon} alt="" />
            </a>
            <ul className="topnav__dropdown">
              <li>
                <a href="#">Connexion</a>
              </li>
              <li>
                <Link className="topnav__link" onClick={() => setModalIsOpen(true)}>
                  <span>
                    <strong>Inscription</strong>
                  </span>
                </Link>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                  <button
                    type="button"
                    className="cross-btn"
                    title="close modal"
                    onClick={() => setModalIsOpen(false)}
                  >
                    ✕
                  </button>
                  <ModalSignup />
                </Modal>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopNavbar;
