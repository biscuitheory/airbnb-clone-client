import { useState } from 'react';

const useLoginForm = (cb, validate) => {
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    setErrors(validate(data));
  };

  return {
    handleInputChange,
    handleFormSubmit,
    data,
    setData,
    errors,
    setErrors,
  };
};

export default useLoginForm;
