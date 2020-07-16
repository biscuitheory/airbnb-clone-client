import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import ModalSignup from '../ModalSignup';
import ModalLogin from '../ModalLogin';
import worldIcon from '../../assets/images/icons/globe.svg';
import unrollIcon from '../../assets/images/icons/unroll.svg';
import listIcon from '../../assets/images/icons/list.svg';
import userIcon from '../../assets/images/icons/user.svg';

Modal.setAppElement('#root');

function TopNavbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
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
            <img className="topnav__dropdowntwo-button-icontwo" src={userIcon} alt="" />
          </button>
          <ul className="topnav__dropdowntwo-list">
            <li className="topnav__dropdowntwo-item">
              <a href="/login">Connexion</a>
            </li>
            <li className="topnav__dropdowntwo-item">
              <Link className="topnav__link" to="" onClick={() => setModalIsOpen(true)}>
                <span>
                  <strong>Inscription</strong>
                </span>
              </Link>
              <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button
                  type="button"
                  className="crossbtn"
                  title="close modal"
                  onClick={() => setModalIsOpen(false)}
                >
                  ✕
                </button>
                <ModalSignup />
              </Modal>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;
