import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const res = await axios('/api/places/');

      setPlaces(res.data);
    };
    fetchPlaces();
  }, []);

  console.log(places);
  return (
    <div>
      {places.map((place) => (
        <div key={place.id}>{place.id}</div>
      ))}
      ;
    </div>
  );
};

export default App;
