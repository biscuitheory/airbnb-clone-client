import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as FlashBas } from '../../assets/images/icons/flash-bas.svg';
import { ReactComponent as Question } from '../../assets/images/icons/question.svg';

function Reserver() {
  const { id } = useParams();
  const [place, setPlace] = useState('');
  const { price_by_night: priceByNight } = place;

  //   const today = new Date();
  //   const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  //   const [date, setDate] = useState(new Date());
  //   const handleChange = () => {
  //     setDate({
  //       startDate: date,
  //     });
  //   };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await axios(`http://localhost:8080/api/places/${id}`);
      setPlace(res.data);
    };
    fetchPlace();
  }, []);

  return (
    <>
      <div>
        <div>
          <div>
            <button type="button">x</button>
          </div>
          <div>
            <form action="">
              <h1>Votre voyage</h1>
              <div>
                <div>
                  <h4>ARRIVÉE</h4>
                  <p>
                    <DatePicker
                      closeOnScroll
                      selected={startDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                    />
                  </p>
                </div>
                <div>
                  <h4>DÉPART</h4>
                  <p>
                    <DatePicker
                      closeOnScroll
                      selected={endDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </p>
                </div>
                <div>
                  <h4>VOYAGEURS</h4>
                  <p>1 voyageur</p>
                </div>
              </div>
              <hr />
              <div>
                <p>
                  <strong>Conditions d&apos;annulation</strong>
                </p>
                <div>
                  <p>Non remboursable 61€</p>
                  <FlashBas className="bookings__booking__info__info-link_right" />
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <div>
                    <div>
                      <p>{priceByNight}</p>
                      <span> x 1 nuit</span>
                    </div>
                    <Question className="bookings__booking__info__info-link_right" />
                  </div>
                  <div>
                    <p>{priceByNight}</p>
                    <span>€</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Offre spéciale : 12% de réduction</p>
                    <Question className="bookings__booking__info__info-link_right" />
                  </div>
                  <div>
                    <p>{priceByNight * 0.12}</p>
                    <span>€</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Frais de service</p>
                    <Question className="bookings__booking__info__info-link_right" />
                  </div>
                  <p>0€</p>
                </div>
                <div>
                  <div>
                    <p>Taxes de séjour et frais</p>
                    <Question className="bookings__booking__info__info-link_right" />
                  </div>
                  <p>1€</p>
                </div>
                <hr />
                <div>
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>{priceByNight * 0.88 - 1}</strong>
                    <span>€</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <button type="button">Réserver</button>
        </div>
      </div>
    </>
  );
}

export default Reserver;
