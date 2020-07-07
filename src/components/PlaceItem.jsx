import React from 'react';

import photoPlace from '../assets/images/photoPlace.jpg';

function PlaceItem(props) {
  const { name, price_by_night: priceByNight } = props.place;

  console.log(props.place);

  return (
    <div>
      <img className="place__image" src={photoPlace} alt="appartement" />
      <p className="place__name"> {name} </p>
      <p className="place__price"> {priceByNight * 30}€/mois </p>
    </div>
  );
}

export default PlaceItem;
