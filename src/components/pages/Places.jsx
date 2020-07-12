import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlaceItem from '../PlaceItem';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await axios('http://localhost:8080/api/places/');

      setPlaces(res.data);
    };
    fetchPlaces();
  }, []);
  return (
    <>
      <div className="places">
        {places.map((place) => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </div>
    </>
  );
};

export default Home;
