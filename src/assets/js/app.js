// Data cards selectors
const frontCardName = document.querySelector(".card-name");
const frontCardNumber = document.querySelector(".main__cards-number > span");
const frontCardDate = document.querySelector(".card-mouth");
const frontCardYear = document.querySelector(".card-year");
const backCardCvC = document.querySelector(".main__cards-back > span");

// Inputs selectors
const inputCardName = document.querySelector("#name");
const inputCardNumber = document.querySelector("#card-number");
const inputCardMouth = document.querySelector("#date");
const inputCardYear = document.querySelector("#year");
const inputCardCvc = document.querySelector("#cvc");

// Completed selectors
const submitButton = document.querySelector(".main__form-confirm");
const completedBox = document.querySelector(".main__completed");
const completedButton = document.querySelector(".main__completed-continue");
const form = document.querySelector(".main__form-wrap");

// Error messages
const boxName = document.querySelector(".main__form-box--name");
const ErrorMessage = document.createElement("p");

submitButton.addEventListener("click", () => {
  if (inputCardName.value.length === 0) {
    ErrorMessage.classList.add("error-message");
    ErrorMessage.textContent = "Can't be blank!";
    boxName.appendChild(ErrorMessage);
  } else {
    completedBox.style.display = "block";
    form.style.display = "none";
    frontCardName.textContent = inputCardName.value;
    frontCardNumber.textContent = inputCardNumber.value;
    frontCardDate.textContent = inputCardMouth.value;
    frontCardYear.textContent = inputCardYear.value;
    backCardCvC.textContent = inputCardCvc.value;
  }
});

completedButton.addEventListener("click", () => {
  completedBox.style.display = "none";
  form.style.display = "block";
});
