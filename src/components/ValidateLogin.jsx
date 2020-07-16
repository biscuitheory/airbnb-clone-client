const validateLogin = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Une adresse e-mail est obligatoire.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Veuillez insérer un e-mail valide.';
  }
  if (!values.password) {
    errors.password = 'Un mot de passe est obligatoire.';
  }
  return errors;
};

export default validateLogin;
