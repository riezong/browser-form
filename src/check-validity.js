import countryList from "./country-list";

// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Regular expression for postal code validation
const postalCodeRegExp = /^[0-9]/;

// Check validity of inputs
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};
const isValidCountry = () => {
  const validity =
    country.value.length !== 0 && countryList.includes(country.value.trim());
  return validity;
};
const isValidPostalCode = () => {
  const validity =
    postalCode.value.length !== 0 || postalCodeRegExp.test(postalCode.value);
  return validity;
};
const isValidPassword = () => {
  const validity = password.value.length !== 0;
  return validity;
};
const isPasswordMatch = () => {
  const validity =
    passwordConfirmation.value === password.value &&
    passwordConfirmation.value !== "";
  return validity;
};

export {
  isValidEmail,
  isValidCountry,
  isValidPostalCode,
  isValidPassword,
  isPasswordMatch,
};
