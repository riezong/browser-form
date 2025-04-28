import "./style.css";
import countryList from "./country-list";

const form = document.getElementById("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#mail + span.error");
const country = document.getElementById("country");
const postalCode = document.getElementById("postalCode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const submit = document.getElementById("submit");

const fields = [email, country, postalCode, password, passwordConfirmation];

// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Check if the country is valid
const isValidCountry = () => {
  const validity = countryList.includes(country.value.trim());
  return validity;
};

// Regular expression for postal code validation
const postalCodeRegExp = /^[0-9]/;

// Check if the postal code is valid
const isValidPostalCode = () => {
  const validity =
    postalCode.value.length !== 0 && postalCodeRegExp.test(postalCode.value);
  return validity;
};

// Check if the password is valid
const isValidPassword = () => {
  const validity = password.value.length !== 0;
  return validity;
};

// Check if the passwords match
const isPasswordMatch = () => {
  const validity =
    passwordConfirmation.value === password.value &&
    passwordConfirmation.value !== "";
  return validity;
};

email.addEventListener("blur", (event) => {
  event.preventDefault();
  if (isValidEmail()) {
    console.log("okay");
  } else {
    console.log("Not an email");
  }
});

country.addEventListener("blur", (event) => {
  event.preventDefault();
  if (isValidCountry()) {
    console.log("okay");
  } else {
    console.log("country doesn't exist");
  }
});

postalCode.addEventListener("blur", (event) => {
  event.preventDefault();
  if (isValidPostalCode()) {
    console.log("okay");
  } else {
    console.log("invalid postcode");
  }
});

password.addEventListener("blur", (event) => {
  event.preventDefault();
  if (isValidPassword()) {
    console.log("okay");
  } else {
    console.log("invalid password");
  }
});

passwordConfirmation.addEventListener("blur", (event) => {
  event.preventDefault();
  if (isPasswordMatch()) {
    console.log("passwords match");
  } else {
    console.log("passwords don't match");
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("email is " + isValidEmail());
  console.log("country is " + isValidCountry());
  console.log("postal code is " + isValidPostalCode());
  console.log("password is " + isValidPassword());
  console.log("confirm password is " + isPasswordMatch());
});
