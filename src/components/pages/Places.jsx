import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlaceItem from '../PlaceItem';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await axios('/api/places/');

      setPlaces(res.data);
    };
    fetchPlaces();
  }, []);

  return (
    <>
      <Header />
      <div>
        {places.map((place) => (
          <PlaceItem key={place.id} place={place} />
        ))}
        ;
      </div>
      <Footer />
    </>
  );
};

export default Home;
