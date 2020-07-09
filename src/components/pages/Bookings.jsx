import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import photoPlace from '../../assets/images/photoPlace.jpg';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYjBjYTBlYy01Mzc5LTQ3YzQtODdmNy1jNTVkOTYwN2QxNzMiLCJ1c2VyUm9sZSI6InRvdXJpc3QiLCJpYXQiOjE1OTQyODg1MTJ9.e_eUy21k7GE-lcpCZd5Md_YW0-ca4rDwo-IWgadXXt8';

      const getBookings = await axios('/api/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBookings(getBookings.data);
      // console.log(getBookings);
    };
    fetchBookings();
  }, [bookings]);
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
