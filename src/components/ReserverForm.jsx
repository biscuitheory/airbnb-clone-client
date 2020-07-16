import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';

import { AuthContext } from '../context/auth';
import useReserverForm from './useReserverForm';
import validate from './ValidateReserver';
import { ReactComponent as FlashBas } from '../assets/images/icons/flash-bas.svg';
import { ReactComponent as Question } from '../assets/images/icons/question.svg';
import { ReactComponent as Croix } from '../assets/images/icons/croix.svg';

const ReserverForm = (callback) => {
  const { state: authState } = useContext(AuthContext);
  const { id } = useParams();
  const [place, setPlace] = useState('');

  const { price_by_night: priceByNight } = place;
  const nuit = 1;
  const priceNuitTotal = priceByNight * nuit;
  const fraiseService = 0;
  const taxe = 0;
  const prixTotal = Math.round((priceNuitTotal + fraiseService - taxe) * 100) / 100;

  useEffect(() => {
    const fetchPlace = async () => {
      const res = await axios(`http://localhost:8080/api/places/${id}`);
      setPlace(res.data);
    };
    fetchPlace();
  }, [id]);

  const { handleChange, handleSubmit, data, errors } = useReserverForm(submit, validate);

  function submit() {
    console.log('Submit est success');
  }

  const history = useHistory();
  async function submit() {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/bookings',
        {
          place_id: id,
          check_in: Moment(data.check_in).utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
          check_out: Moment(data.check_out).utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
        },
        {
          headers: { Authorization: `Bearer ${authState.token}` },
        }
      );
      if (res) {
        console.log('Submitted Succesfully');
        console.log('resultats', res);
        history.push('/bookings');
      }
    } catch (err) {
      console.log('err from signup', err);
    }
  }
  return (
    <>
      <div className="reserver">
        <div>
          <Croix className="reserver__croix" />
        </div>
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <h1>Votre voyage</h1>
            <div className="reserver__input">
              <div className="reserver__input__item_check-in">
                <label htmlFor="check_in">ARRIVÉE</label>
                <input
                  type="date"
                  id="start"
                  name="check_in"
                  value={data.check_in}
                  onChange={handleChange}
                />
                {errors.check_in && <p className="error">{errors.check_in}</p>}
              </div>
              <div className="reserver__input__item__check-out">
                <label htmlFor="check_out">DÉPART</label>
                <input
                  type="date"
                  id="end"
                  name="check_out"
                  value={data.check_out}
                  onChange={handleChange}
                />
                {errors.check_out && <p className="error">{errors.check_out}</p>}
              </div>
              <div className="reserver__input__item__numVoyageurs">
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
                <p>Non remboursable {prixTotal}€</p>
                <FlashBas className="bookings__booking__info__info-link_right" />
              </div>
            </div>
            <hr />
            <div>
              <div>
                <div>
                  <div>
                    <p>{priceByNight}</p>
                    <span> x {nuit} nuit</span>
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
                  <p>Frais de service</p>
                  <Question className="bookings__booking__info__info-link_right" />
                </div>
                <p>{fraiseService}</p>
                <span>€</span>
              </div>
              <div>
                <div>
                  <p>Taxes de séjour et frais</p>
                  <Question className="bookings__booking__info__info-link_right" />
                </div>
                <p>{taxe}</p>
                <span>€</span>
              </div>
              <hr />
              <div>
                <p>
                  <strong>Total</strong>
                </p>
                <p>
                  <strong>{prixTotal}</strong>
                  <span>€</span>
                </p>
              </div>
            </div>
            <div>
              <button type="submit">Réserver</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReserverForm;
