import { useState, useEffect } from 'react';

const useReserverForm = (callback, validate) => {
  const [data, setData] = useState({ check_in: '', check_out: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(data));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    data,
    errors,
  };
};

export default useReserverForm;
