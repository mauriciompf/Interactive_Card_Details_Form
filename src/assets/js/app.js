const form = document.querySelector("form");

const inputs = [
  {
    id: "cardName",
    element: document.querySelector("#name"),
    blankMessage: "Cant't be blank",
  },
  {
    id: "cardNumber",
    element: document.querySelector("#card-number"),
    blankMessage: "Cant't be blank",
    numberValidMessage: "Is not valid",
  },
  {
    id: "cardMouth",
    element: document.querySelector("#mouth"),
    blankMessage: "Cant't be blank",
  },
  {
    id: "cardYear",
    element: document.querySelector("#year"),
    blankMessage: "Cant't be blank",
  },
  {
    id: "cardCvc",
    element: document.querySelector("#cvc"),
    blankMessage: "Cant't be blank",
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function showError(input) {
  const inputControl = input.element.parentElement;
  const displayError = inputControl.querySelector(".error");
  displayError.textContent = input.blankMessage;

  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function showSuccess(input) {
  const inputControl = input.element.parentElement;
  const displayError = inputControl.querySelector(".error");
  displayError.textContent = "";

  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function validateInputs() {
  inputs.forEach((input) => {
    if (!input.element.value) {
      showError(input);
    } else {
      showSuccess(input);
    }
  });
}

inputs[1].element.addEventListener("input", () => {
  const formatedNumber = formatNumber(
    inputs[1].element.value.replaceAll(" ", "")
  );
  inputs[1].element.value = formatedNumber;
});

function formatNumber(number) {
  const formated = [];
  for (let i = 0; i < number.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      formated.push(" ");
    }
    formated.push(number[i]);
  }
  return formated.join("");
}
