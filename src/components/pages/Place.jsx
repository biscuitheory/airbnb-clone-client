import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Breakpoint } from 'react-socks';
import { AuthContext } from '../../context/auth';

import { ReactComponent as GoBackArrow } from '../../assets/images/icons/arrow.svg';

const Place = () => {
  const { state: authState } = useContext(AuthContext);

  const { id } = useParams();

  const [place, setPlace] = useState('');

  const { name, city } = place;

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await axios(`http://localhost:8080/api/places/${id}`);
      setPlace(res.data);
    };
    fetchPlace();
  }, [id]);

  if (authState.isAuthenticated) {
    return (
      <>
        <Link to="/">&#8249; Logements • Airbnb</Link>
        <h1>{name}</h1>
        <p>{city}</p>
        <p>C&apos;est une perle rare.Les réservations sont fréquentes chez</p>
        <Link to={`/rooms/${id}/reserver`}>
          <button type="button">Réserver</button>
        </Link>
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
        <div>
          <img src="" alt=""/>
        </div>
        <h1>{name}</h1>
        <p>{city}</p>
        <p>C&apos;est une perle rare. Les réservations sont fréquentes chez</p>
        <div className="place__container-book">
          <Link to="/login">
            <button type="button">Réserver</button>
          </Link>
        </div>
      </Breakpoint>
      <Breakpoint large up>
        <div className="place__container">
          <h1>{name}</h1>
          <div className="place__container-intro">
            <p>{city}</p>-<p>C&apos;est une perle rare.Les réservations sont fréquentes chez</p>
          </div>
          <div className="place__container-book">
            <Link to="/login">
              <button type="button">Réserver</button>
            </Link>
          </div>
        </div>
      </Breakpoint>
    </>
  );
};

export default Place;
