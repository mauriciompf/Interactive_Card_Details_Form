const submitButton = document.querySelector("[data-submit='submit']");
const cardNumberInput = document.querySelector("[data-number='number']");
const mouthInput = document.querySelector("[data-input='mm']");
const yearInput = document.querySelector("[data-input='yy']");
const cvcInput = document.querySelector("[data-input='cvc']");
const boxNumber = document.querySelector("[data-box='number']");
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (cardNumberInput.value.length === 0) {
    errorMessage.textContent = "Can't be blank";
    boxNumber.appendChild(errorMessage);
    cardNumberInput.classList.add("card-number--error");
  } else {
    errorMessage.remove();
    cardNumberInput.classList.remove("card-number--error");
  }
});
