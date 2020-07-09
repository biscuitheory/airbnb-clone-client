export default function validateSignup(values) {
  let errors = {};
  if (!values.email) {
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Une adresse e-mail est obligatoire.';
  }
  if (!values.password) {
    errors.password = 'Un mot de passe est obligatoire.';
  } else if (values.password.length < 8) {
    errors.password = 'Le mot de passe doit faire au moins 8 caractères.';
  }
  return errors;
}
