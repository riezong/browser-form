import "./style.css";

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

email.addEventListener("input", (event) => {
  event.preventDefault();
  if (email.validity.typeMismatch) {
    console.log("Not an email");
  }
});

country.addEventListener("input", (event) => {
  event.preventDefault();
  if (country.validity.typeMismatch) {
    console.log("Not an email");
  }
});

postalCode.addEventListener("input", (event) => {
  event.preventDefault();
  if (postalCode.validity.typeMismatch) {
    console.log("Not an email");
  }
});

password.addEventListener("input", (event) => {
  event.preventDefault();
  if (password.validity.typeMismatch) {
    console.log("Not an email");
  }
});

passwordConfirmation.addEventListener("input", (event) => {
  event.preventDefault();
  if (passwordConfirmation.value === "") {
    console.log("Cannot be empty");
  } else if (passwordConfirmation.value === password.value) {
    console.log("Passwords match");
  } else {
    console.log("Passwords don't match");
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
});
