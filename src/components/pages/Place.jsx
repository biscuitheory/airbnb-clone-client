import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Footer';

const Place = () => {
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

  return (
    <>
      <Link to="/">&#8249; Logements • Airbnb</Link>
      <h1>{name}</h1>
      <p>{city}</p>
      <p>C'est une perle rare.Les réservations sont fréquentes chez</p>
      <button type="button">Réserver</button>
      <Footer />
    </>
  );
};

export default Place;
