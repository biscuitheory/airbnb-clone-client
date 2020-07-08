import React from 'react';
import { Link } from 'react-router-dom';

import photoPlace from '../assets/images/photoPlace.jpg';

const PlaceItem = (props) => {
  const { id, name, price_by_night: priceByNight } = props.place;

  // PlaceItem.propTypes = {
  //   id: PropTypes.number,
  // };

  return (
    <Link to={`/rooms/${id}`}>
      <div className="places__place">
        <img className="place__image" src={photoPlace} alt="appartement" />
        <p className="place__name"> {name} </p>
        <p className="place__price"> {priceByNight * 30}€/mois </p>
      </div>
    </Link>
  );
};

export default PlaceItem;
