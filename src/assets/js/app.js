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

// Event listener
function updateCardContent(event, element) {
  if (event.target.value.length !== 0) {
    element.textContent = event.target.value;
  }
}

inputCardName.addEventListener("keyup", (event) => {
  updateCardContent(event, frontCardName);
});

inputCardNumber.addEventListener("keyup", (event) => {
  updateCardContent(event, frontCardNumber);
  let count = 0;
  if (event.target.value.length >= 4) {
    event.target.value += " ";
  }
});

inputCardMouth.addEventListener("keyup", (event) => {
  updateCardContent(event, frontCardDate);
});

inputCardYear.addEventListener("keyup", (event) => {
  updateCardContent(event, frontCardYear);
});

inputCardCvc.addEventListener("keyup", (event) => {
  updateCardContent(event, backCardCvC);
});
