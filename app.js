const formInputs = document.querySelectorAll("input");
console.log(formInputs);

function addHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.add("selected");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("click", addHighlight);
});

function removeHighlight() {
  let currentInput = event.target.closest("div");
  currentInput.classList.remove("selected");
}

formInputs.forEach(function (formInput) {
  formInput.addEventListener("blur", removeHighlight);
});
