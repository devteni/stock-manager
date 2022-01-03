export const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!regex.test(values.email)) {
    errors.email = 'Invalid Email';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password too short';
  }
  return errors;
};
