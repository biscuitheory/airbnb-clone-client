const validateReserver = (values) => {
  const errors = {};
  if (!values.check_in) {
    errors.check_in = "Le champ check_in n'est pas renseigné";
  }

  if (!values.check_out) {
    errors.check_out = "Le champ check_out n'est pas renseigné";
  }

  return errors;
};

export default validateReserver;
