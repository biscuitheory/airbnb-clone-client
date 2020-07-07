import React from 'react';

import photoPlace from '../assets/images/photoPlace.jpg';

function PlaceItem(props) {
  const { name, price_by_night: priceByNight } = props.place;

  console.log(props.place);

  return (
    <div>
      <img src={photoPlace} alt="appartement" />
      <h4> {name} </h4>
      <p> {priceByNight * 30}€/mois </p>
    </div>
  );
}

export default PlaceItem;
