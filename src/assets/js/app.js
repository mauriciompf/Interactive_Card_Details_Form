const form = document.querySelector("form");

const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#card-number");
const inputMouth = document.querySelector("#mouth");
const inputYear = document.querySelector("#year");
const inputCvc = document.querySelector("#cvc");

// let isValid = false;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateForm();

//   if (isValid) {
//     displayCompleted();
//   }
// });

// function showError(input, errorMessage) {
//   const inputControl = input.parentElement;
//   const displayError = inputControl.querySelector(".error");
//   displayError.textContent = errorMessage;

//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// }

// function showSuccess(input) {
//   const inputControl = input.parentElement;
//   const displayError = inputControl.querySelector(".error");
//   displayError.textContent = "";

//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
//   isValid = true;
// }

// function isValidCardNumber(input) {
//   const rx = /^(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}$/g;
//   return rx.test(input);
// }

// function isValidDate(input) {
//   const rx = /\d{2}/g;
//   return rx.test(input);
// }

// function validateForm() {
//   const emptyMessage = "Can't be blank!";
//   isValid = true;

//   if (!inputName.value) {
//     showError(inputName, emptyMessage);
//     isValid = false;
//   } else {
//     showSuccess(inputName);
//   }

//   if (!inputNumber.value) {
//     showError(inputNumber, emptyMessage);
//     isValid = false;
//   } else if (!isValidCardNumber(inputNumber.value)) {
//     showError(inputNumber, "It's not valid!");
//     isValid = false;
//   } else {
//     showSuccess(inputNumber);
//   }

//   if (!inputMouth.value) {
//     showError(inputMouth, emptyMessage);
//     isValid = false;
//   } else if (!isValidDate(inputMouth.value)) {
//     showError(inputMouth, "It's not valid!");
//     isValid = false;
//   } else if (parseInt(inputMouth.value) > 12) {
//     showError(inputMouth, "It's not valid!");
//     isValid = false;
//   } else {
//     showSuccess(inputMouth);
//   }

//   if (!inputYear.value) {
//     showError(inputYear, emptyMessage);
//     isValid = false;
//   } else if (!isValidDate(inputYear.value)) {
//     showError(inputYear, "It's not valid!");
//     isValid = false;
//   } else {
//     showSuccess(inputYear);
//   }

//   if (!inputCvc.value) {
//     showError(inputCvc, emptyMessage);
//     isValid = false;
//   } else {
//     showSuccess(inputCvc);
//   }
// }

// inputNumber.addEventListener("input", () => {
//   const formattedNumber = formatNumber(inputNumber.value.replaceAll(" ", ""));
//   inputNumber.value = formattedNumber;
// });

// function formatNumber(number) {
//   return number.replace(/\d{4}(?=\d)/g, "$& ");
// }

// const continueButton = document.querySelector(".main__completed-continue");
// const completedBlock = document.querySelector(".main__completed");
// const cardsBlock = document.querySelector(".main__form-wrap");

// const displayCardName = document.querySelector(".card-name");
// const displayCardNumber = document.querySelector(".main__cards-number > span");
// const displayCardMouth = document.querySelector(".card-mouth");
// const displayCardYear = document.querySelector(".card-year");
// const displayCardCvc = document.querySelector(".main__cards-back > span");

// function displayCompleted() {
//   completedBlock.style.display = "block";
//   cardsBlock.style.display = "none";
//   displayCardName.textContent = inputName.value;
//   displayCardNumber.textContent = inputNumber.value;
//   displayCardMouth.textContent = inputMouth.value;
//   displayCardYear.textContent = inputYear.value;
//   displayCardCvc.textContent = inputCvc.value;
// }

// continueButton.addEventListener("click", () => {
//   completedBlock.style.display = "none";
//   cardsBlock.style.display = "block";
// });
