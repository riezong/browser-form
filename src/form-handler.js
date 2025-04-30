import {
  isValidEmail,
  isValidCountry,
  isValidPostalCode,
  isValidPassword,
  isPasswordMatch,
} from "./check-validity";

const DOM = (function () {
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const country = document.getElementById("country");
  const countryError = document.getElementById("emailError");
  const postalCode = document.getElementById("postalCode");
  const postalCodeError = document.getElementById("emailError");
  const password = document.getElementById("password");
  const passwordError = document.getElementById("emailError");
  const passwordConfirmation = document.getElementById("passwordConfirmation");
  const passwordConfirmationError = document.getElementById("emailError");
  const submit = document.getElementById("submit");
})();

// --- Functions to update UI based on validation ---

// Update class based on validity
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};
const setCountryClass = (isValid) => {
  country.className = isValid ? "valid" : "invalid";
};
const setPostalCodeClass = (isValid) => {
  postalCode.className = isValid ? "valid" : "invalid";
};
const setPasswordClass = (isValid) => {
  password.className = isValid ? "valid" : "invalid";
};
const setPasswordConfirmationClass = (isValid) => {
  passwordConfirmation.className = isValid ? "valid" : "invalid";
};

// Initialize form validation on page load
const initializeValidation = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  console.log(emailInput);
  const countryInput = isValidCountry();
  setCountryClass(countryInput);
  const postalCodeInput = isValidPostalCode();
  setPostalCodeClass(postalCodeInput);
  const passwordInput = isValidPassword();
  setPasswordClass(passwordInput);
  const passwordConfirmationInput = isPasswordMatch();
  setPasswordConfirmationClass(passwordConfirmationInput);
};
initializeValidation();

// Update error message and visibility
const updateEmailError = (isValidEmailInput) => {
  if (isValidEmailInput) {
    emailError.textContent = "";
    emailError.removeAttribute("class");
  } else {
    emailError.textContent = "I expect an email, darling!";
    emailError.setAttribute("class", "active error");
  }
};

const updateCountryError = (isValidEmailInput) => {
  if (isValidEmailInput) {
    countryError.textContent = "";
    countryError.removeAttribute("class");
  } else {
    countryError.textContent = "I expect an email, darling!";
    countryError.setAttribute("class", "active error");
  }
};

const updatePostalCodeError = (isValidEmailInput) => {
  if (isValidEmailInput) {
    postalCodeError.textContent = "";
    postalCodeError.removeAttribute("class");
  } else {
    postalCodeError.textContent = "I expect an email, darling!";
    postalCodeError.setAttribute("class", "active error");
  }
};

const updatePasswordError = (isValidEmailInput) => {
  if (isValidEmailInput) {
    passwordError.textContent = "";
    passwordError.removeAttribute("class");
  } else {
    passwordError.textContent = "I expect an email, darling!";
    passwordError.setAttribute("class", "active error");
  }
};

const updatePasswordConfirmationError = (isValidEmailInput) => {
  if (isValidEmailInput) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.removeAttribute("class");
  } else {
    passwordConfirmationError.textContent = "I expect an email, darling!";
    passwordConfirmationError.setAttribute("class", "active error");
  }
};

// --- Individual field validation handlers ---

// Handle input event to update email validity
const handleEmailInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateEmailError(emailInput);
};

// Handle input event to update email validity
const handleCountryInput = () => {
  const countryInput = isValidCountry();
  setCountryClass(countryInput);
  updateCountryError(countryInput);
};

// Handle input event to update email validity
const handlePostalCodeInput = () => {
  const postalCodeInput = isValidPostalCode();
  setPostalCodeClass(postalCodeInput);
  updatePostalCodeError(postalCodeInput);
};

// Handle input event to update email validity
const handlePasswordInput = () => {
  const passwordInput = isValidPassword();
  setPasswordClass(passwordInput);
  updatePasswordError(passwordInput);
};

// Handle input event to update email validity
const handlePasswordConfirmationInput = () => {
  const passwordConfirmationInput = isPasswordMatch();
  setPasswordConfirmationClass(passwordConfirmationInput);
  updatePasswordConfirmationError(passwordConfirmationInput);
};

// Run on defocus
// email.addEventListener("blur", (event) => {
//   event.preventDefault();
//   if (isValidEmail()) {
//     console.log("okay");
//   } else {
//     console.log("Not an email");
//   }
// });

// country.addEventListener("blur", (event) => {
//   event.preventDefault();
//   if (isValidCountry()) {
//     console.log("okay");
//   } else {
//     console.log("country doesn't exist");
//   }
// });

// postalCode.addEventListener("blur", (event) => {
//   event.preventDefault();
//   if (isValidPostalCode()) {
//     console.log("okay");
//   } else {
//     console.log("invalid postcode");
//   }
// });

// password.addEventListener("blur", (event) => {
//   event.preventDefault();
//   if (isValidPassword()) {
//     console.log("okay");
//   } else {
//     console.log("invalid password");
//   }
// });

// passwordConfirmation.addEventListener("blur", (event) => {
//   event.preventDefault();
//   if (isPasswordMatch()) {
//     console.log("passwords match");
//   } else {
//     console.log("passwords don't match");
//   }
// });

// --- Form submission handler ---

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("email is " + isValidEmail());
  console.log("country is " + isValidCountry());
  console.log("postal code is " + isValidPostalCode());
  console.log("password is " + isValidPassword());
  console.log("confirm password is " + isPasswordMatch());

  // if (isValidEmail && isValidCountry && isValidPostalCode && isPasswordMatch) {
  //   console.log("high five!");
  // } else {
  //   console.log("You dun goofed");
  // }
});

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
// window.addEventListener("load", initializeValidation);

// This defines what happens when the user types in the field
email.addEventListener("input", handleEmailInput);
country.addEventListener("input", handleCountryInput);
postalCode.addEventListener("input", handlePostalCodeInput);
password.addEventListener("input", handlePasswordInput);
passwordConfirmation.addEventListener("input", handlePasswordConfirmationInput);

// This defines what happens when the user tries to submit the data
// form.addEventListener("submit", handleSubmit);

export {
  setEmailClass,
  setCountryClass,
  setPostalCodeClass,
  setPasswordClass,
  setPasswordConfirmationClass,
  updateEmailError,
  handleEmailInput,
};
