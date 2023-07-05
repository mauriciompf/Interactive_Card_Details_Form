// Data cards selectors
const frontCardName = document.querySelector(".card-name");
const frontCardNumber = document.querySelector(".main__cards-number > span");
const frontCardDate = document.querySelector(".card-date");
const backCardCvC = document.querySelector(".main__cards-back > span");

// Inputs selectors
const inputCardName = document.querySelector("#name");
const inputCardNumber = document.querySelector("#card-number");
const inputCardMouth = document.querySelector("#date");
const inputCardYear = document.querySelector("#inputCardDate");
const inputCardCvc = document.querySelector("#cvc");

// Function to update front card
function updateFrontCardName(value) {
  frontCardName.textContent = value;
}

// Event listener
inputCardName.addEventListener("keyup", (event) => {
  updateFrontCardName(event.target.value);
});
