import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { SearchContext } from '../context/search';
import useForm from './useForm';

function SearchBar() {
  const { dispatch } = useContext(SearchContext);
  const { handleInputChange, handleFormSubmit, data, setData, errors } = useForm(submit, validate);
  const history = useHistory();

  async function submit() {
    try {
      const res = await axios.post(`http://localhost:8080/api/places?city=${data.city}`, {
        city: data.city,
      });
      if (res.status === 200) {
        dispatch({});
      }
    } catch (error) {}
  }

  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <label htmlFor="city">
          <input
            type="text"
            value={data.city}
            onChange={handleInputChange}
            name="city"
            id="city"
            placeholder="Où allez-vous ?"
            className="form__input-city"
          />
        </label>
        <label htmlFor="check_in">
          <input
            type="date"
            name="check_in"
            id="checkIn"
            placeholder="Ajoutez des dates"
            className="form__input-checkin"
          />
        </label>
        <label htmlFor="check_out">
          <input
            type="date"
            name="check_out"
            id="checkOut"
            placeholder="Ajoutez des dates"
            className="form__input-checkout"
          />
        </label>
        <label htmlFor="travellers">
          <input
            type="number"
            name="travellers"
            id="travellers"
            placeholder="Ajoutez des voyageurs"
            className="form__input-travellers"
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
