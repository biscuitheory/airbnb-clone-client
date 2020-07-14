import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../../context/auth';

// import photoPlace from '../../assets/images/photoPlace.jpg';

const Bookings = () => {
  const { state: authState } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log(authState);
    const fetchBookings = async () => {
      const getBookings = await axios('http://localhost:8080/api/bookings', {
        headers: { Authorization: `Bearer ${authState.token}` },
      });

      setBookings(getBookings.data);
      // console.log(getBookings);
    };
    fetchBookings();
  }, []);
  return (
    <>
      <h2>Voyages</h2>
      <p>Tous vos bookings !!!!</p>
      <div>
        {bookings.map((booking) => (
          <div key={booking.id}>
            <div>
              {/* <img className="place__image" src={photoPlace} alt="appartement" />
              <h4>{booking.Place.City}</h4> */}
              <h4>{booking.Place.name}</h4>
              <p>{booking.Place.description}</p>
              <p>{booking.check_in}</p>
              <p>{booking.check_out}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Bookings;
