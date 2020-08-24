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
      const res = await axios.post('https://airbnb-clone-api.herokuapp.com/api/', {
        city: data.city,
      });
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
      </form>
    </div>
  );
}

export default SearchBar;
