import React, { useState, useEffect } from 'react';
import axios from 'axios';

import photoPlace from '../../assets/images/photoPlace.jpg';
import { ReactComponent as Voyageurs } from '../../assets/images/icons/voyageurs.svg';
import { ReactComponent as Calendrier } from '../../assets/images/icons/calendrier.svg';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';

const Booking = () => {
  const [booking, setBooking] = useState([]);

  console.log(booking);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios('http://localhost:8080/api/bookings');

      setBooking(res.data);
    };
    fetchBookings();
  }, []);
  return (
    <>
      <h3>X</h3>
      <div>
        <div>
          <div>
            <h4>Double Classic Room</h4>
            <p>Chambre dans boutique-hôtel à Paris</p>
          </div>
          <img className="place__image" src={photoPlace} alt="appartement" />
        </div>
        <hr />
        <div>
          <div>
            <Voyageurs className="nav__icon" />
            <p>1 voyageur</p>
          </div>
          <div>
            <Calendrier className="nav__icon" />
            <p>23 juil.2020</p>
            <Arrow className="nav__icon" />
            <p>24 juil.2020</p>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <p>75,000€ x 1 nuit</p>
            <p>75,000€</p>
          </div>
          <div>
            <p>Offre spéciale : 10 % de réduction</p>
            <p>-7,50€</p>
          </div>
          <div>
            <p>Taxes de séjour et frais</p>
            <p>1,13€</p>
          </div>
          <div>
            <p>Total(EUR-€)</p>
            <p>1,13€</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Réservez ce logement immédiatement pour 13,73€.</p>
          <p>Payez le reste le 10 juil... En savoir plus</p>
        </div>
        <hr />
        <div>
          <div>
            <p>Annulation gratuit pendant 48 heures</p>
            <p>
              Si vous annulez dans les 48 heures qui suivent la réservation, vous recevrez un
              remboursement intégral. Plus d&apos;informations
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
