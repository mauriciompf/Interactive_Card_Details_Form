const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#card-number");
const mouthInput = document.querySelector("#mouth");
const yearInput = document.querySelector("#year");
const cvcInput = document.querySelector("#cvc");

const cardName = document.querySelector(".card-name");
const cardNumber = document.querySelector(".main__cards-number > span");
const cardMouth = document.querySelector(".card-mouth");
const cardYear = document.querySelector(".card-year");
const cardBack = document.querySelector(".main__cards-back > span");

const blankMessage = "Can't be blank!";
const validMessage = "It's not valid!";

const completedWrap = document.querySelector(".main__completed");
const continueButton = document.querySelector(".main__completed-continue");
// const confirmButton = document.querySelector(".main__form-confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();

  if (
    validateName() &&
    validateNumber() &&
    validateMouth() &&
    validateYear() &&
    validateCvc()
  ) {
    completedWrap.classList.add("active");
    form.parentElement.classList.add("active");
  }
});

continueButton.addEventListener("click", () => {
  completedWrap.classList.remove("active");
  form.parentElement.classList.remove("active");
});

function displayErrorMessage(input, errorMessage) {
  const inputControl = input.parentElement;
  const displayError = inputControl.querySelector(".error");
  displayError.textContent = errorMessage;
  inputControl.className = "error";
}

function successValid(input) {
  const inputControl = input.parentElement;
  const displayError = inputControl.querySelector(".error");
  displayError.textContent = "";
  inputControl.className = "success";
}

function validateName() {
  const nameInputValue = nameInput.value.trim();
  if (nameInputValue === "") {
    displayErrorMessage(nameInput, blankMessage);
    return false;
  } else if (/^[0-9]+$/.test(nameInputValue)) {
    displayErrorMessage(nameInput, validMessage);
    return false;
  } else {
    successValid(nameInput);
    cardName.textContent = nameInputValue;
    return true;
  }
}

function validateNumber() {
  const numberInputValue = numberInput.value;
  numberInput.value = formatNumber(numberInput.value.replaceAll(" ", ""));
  cardNumber.textContent = numberInputValue;
  if (numberInputValue === "") {
    displayErrorMessage(numberInput, blankMessage);
    cardNumber.textContent = "0000 0000 0000 0000";
    return false;
  } else if (
    !/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/.test(numberInputValue)
  ) {
    displayErrorMessage(numberInput, "Wrong format, numbers only");
    return false;
  } else {
    successValid(numberInput);
    return true;
  }
}

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

function validateMouth() {
  const mouthInputValue = mouthInput.value;

  if (mouthInputValue === "") {
    displayErrorMessage(mouthInput, blankMessage);
    return false;
  } else if (!/\d/.test(mouthInputValue)) {
    displayErrorMessage(mouthInput, validMessage);
    return false;
  } else if (mouthInputValue > 12 || mouthInputValue === "00") {
    displayErrorMessage(mouthInput, validMessage);
    return false;
  } else {
    successValid(mouthInput);
    cardMouth.textContent = mouthInputValue;
    return true;
  }
}

function validateYear() {
  const yearInputValue = yearInput.value;

  if (yearInputValue === "") {
    displayErrorMessage(yearInput, blankMessage);
    return false;
  } else if (!/\d{2}/.test(yearInputValue)) {
    displayErrorMessage(yearInput, validMessage);
    return false;
  } else if (yearInputValue === "00") {
    displayErrorMessage(yearInput, validMessage);
    return false;
  } else {
    successValid(yearInput);
    cardYear.textContent = yearInputValue;
    return true;
  }
}

function validateCvc() {
  const cvcInputValue = cvcInput.value;
  cardBack.textContent = cvcInputValue;

  if (cvcInputValue === "") {
    displayErrorMessage(cvcInput, blankMessage);
    cardBack.textContent = "000";
    return false;
  } else if (!/\d{3}/.test(cvcInputValue)) {
    displayErrorMessage(cvcInput, validMessage);
    return false;
  } else if (cvcInputValue === "000") {
    displayErrorMessage(cvcInput, validMessage);
  } else {
    successValid(cvcInput);
    return true;
  }
}

function validateForm() {
  validateName();
  validateNumber();
  validateMouth();
  validateYear();
  validateCvc();
}

nameInput.addEventListener("input", validateName);
numberInput.addEventListener("input", validateNumber);
mouthInput.addEventListener("input", validateMouth);
yearInput.addEventListener("input", validateYear);
cvcInput.addEventListener("input", validateCvc);
