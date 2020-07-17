import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Breakpoint } from 'react-socks';
import { AuthContext } from '../../context/auth';

import photoPlace from '../../assets/images/photoPlace.jpg';

const Place = () => {
  const { state: authState } = useContext(AuthContext);

  const { id } = useParams();

  const [place, setPlace] = useState('');

  const { name, city, max_guests, rooms, bathrooms, price_by_night: priceByNight } = place;

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await axios(`http://localhost:8080/api/places/${id}`);
      setPlace(res.data);
      console.log(res.data);
    };
    fetchPlace();
  }, [id]);

  if (authState.isAuthenticated) {
    return (
      <>
        <Breakpoint small down>
          <div className="place__header">
            <Link to="/" style={{ textDecoration: 'none' }}>
              &#8249; Logements • Airbnb
            </Link>
          </div>
          <div className="place__container">
            <div className="place__container-images">
              <img className="place__container-image" src={photoPlace} alt="appartement" />
            </div>
            <div className="place__container-info">
              <h1>{name}</h1>
              <p className="place__container-info-city">{city}</p>
              <p className="place__container-info-moreinfos">
                {max_guests} pers. max ∙ {rooms} chambres ∙ {bathrooms} salles de bain
              </p>
              <p className="container-info-city-night"> {priceByNight}€/nuit </p>
              <p className="container-info-city-month"> {priceByNight * 30}€ pour un mois </p>
              <p className="place__container-info-more">
                C&apos;est une perle rare. Les réservations sont fréquentes !
              </p>
            </div>
          </div>
          <div className="place__container-book">
            <Link to="/login">
              <button type="button" className="place__container-book-button">
                Réserver
              </button>
            </Link>
          </div>
        </Breakpoint>
        <Breakpoint medium up>
          <div className="place__container">
            <div className="place__container-images">
              <img className="place__container-image" src={photoPlace} alt="appartement" />
            </div>
            <div className="place__container-info">
              <h1>{name}</h1>
              <p className="place__container-info-city">{city}</p>
              <p className="place__container-info-moreinfos">
                {' '}
                {max_guests} pers. max ∙ {rooms} chambres ∙ {bathrooms} salles de bain
              </p>
              <p className="container-info-city-night"> {priceByNight}€/nuit </p>
              <p className="container-info-city-month"> {priceByNight * 30}€ pour un mois </p>
              <p className="place__container-info-more">
                C&apos;est une perle rare. Les réservations sont fréquentes !
              </p>
              <Link to="/login">
                <button type="button" className="place__container-book-button">
                  Réserver
                </button>
              </Link>
            </div>
          </div>
        </Breakpoint>
      </>
    );
  }

  return (
    <>
      <Breakpoint small down>
        <div className="place__header">
          <Link to="/" style={{ textDecoration: 'none' }}>
            &#8249; Logements • Airbnb
          </Link>
        </div>
        <div className="place__container">
          <div className="place__container-images">
            <img className="place__container-image" src={photoPlace} alt="appartement" />
          </div>
          <div className="place__container-info">
            <h1>{name}</h1>
            <p className="place__container-info-city">{city}</p>
            <p className="place__container-info-moreinfos">
              {max_guests} pers. max ∙ {rooms} chambres ∙ {bathrooms} salles de bain
            </p>
            <p className="container-info-city-night"> {priceByNight}€/nuit </p>
            <p className="container-info-city-month"> {priceByNight * 30}€ pour un mois </p>
            <p className="place__container-info-more">
              C&apos;est une perle rare. Les réservations sont fréquentes !
            </p>
          </div>
        </div>
        <div className="place__container-book">
          <Link to="/login">
            <button type="button" className="place__container-book-button">
              Réserver
            </button>
          </Link>
        </div>
      </Breakpoint>
      <Breakpoint medium up>
        <div className="place__container">
          <div className="place__container-images">
            <img className="place__container-image" src={photoPlace} alt="appartement" />
          </div>
          <div className="place__container-info">
            <h1>{name}</h1>
            <p className="place__container-info-city">{city}</p>
            <p className="place__container-info-moreinfos">
              {' '}
              {max_guests} pers. max ∙ {rooms} chambres ∙ {bathrooms} salles de bain
            </p>
            <p className="container-info-city-night"> {priceByNight}€/nuit </p>
            <p className="container-info-city-month"> {priceByNight * 30}€ pour un mois </p>
            <p className="place__container-info-more">
              C&apos;est une perle rare. Les réservations sont fréquentes !
            </p>
            <Link to="/login">
              <button type="button" className="place__container-book-button">
                Réserver
              </button>
            </Link>
          </div>
        </div>
      </Breakpoint>
    </>
  );
};

export default Place;
