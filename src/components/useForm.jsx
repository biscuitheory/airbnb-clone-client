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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value);
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
    handleInputChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
