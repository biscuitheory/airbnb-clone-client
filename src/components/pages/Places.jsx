import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Breakpoint } from 'react-socks';

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
      <Breakpoint small down>
        <div className="places__intro">
          <h1>Logements : Paris </h1>
          <p>Classement par ordre de pertinence</p>
        </div>
        <div className="places">
          {places.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      </Breakpoint>
      <Breakpoint medium only>
        <div className="places__intro">
          <h1>Logements : Paris </h1>
          <p>Classement par ordre de pertinence</p>
        </div>
        <div className="places">
          {places.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      </Breakpoint>
      <Breakpoint large up>
        <div className="places__intro">
          <h1>Logements : Paris </h1>
          <p>Classement par ordre de pertinence</p>
        </div>
        <div className="places">
          {places.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      </Breakpoint>
    </>
  );
};

export default Home;
