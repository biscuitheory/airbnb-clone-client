import { useState, useEffect } from 'react';

const useForm = (cb, validate) => {
  const [values, setValues] = useState({
    role: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    role: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('form', values);
    e.preventDefault();
    //handling err}
    setErrors(validate(values));
    setIsSubmitting(true);
    // cb();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      cb();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
