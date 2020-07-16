import { useState, useEffect } from 'react';

const useForm = (cb, validate) => {
  const initialState = {
    role: '',
    first_name: '',
    last_name: '',
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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && data.isSubmitting) {
      cb();
    } else {
      setData({
        ...data,
        isSubmitting: false,
      });
    }
  }, [errors]);

  return {
    handleInputChange,
    handleFormSubmit,
    data,
    errors,
    setData,
  };
};

export default useForm;
