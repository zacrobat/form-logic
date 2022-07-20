const formInputs = document.querySelectorAll("input, button");
// console.log(formInputs);

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

// To-do: button to validate inputs before submit.

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation

// email regexp /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
// [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function checkEmailIsVald() {
  let emailField = document.querySelector("input[name='user_email']");
  console.log(emailField.checkValidity()); // works
  console.log(emailField.validity.valid); // also works
}

checkEmailIsVald();
