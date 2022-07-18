const formInputs = document.querySelectorAll("input, button");
console.log(formInputs);

function addHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.add("selected", "help-parent");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("focus", addHighlight);
});

function removeHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.remove("selected", "help-parent");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("blur", removeHighlight);
});

// To-do use removeAttribute(disabled) from button when validations are satisfied
