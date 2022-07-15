const formInputs = document.querySelectorAll("input");
console.log(formInputs);

function identifyFocus() {
  console.log("Identifying focus");
  let currentInput = event.target.closest("div");
  console.log(currentInput);
  currentInput.classList.add("selected");
}

formInputs.forEach(function (formInput) {
  console.log("Binding the input");
  console.log(formInput.type);
  formInput.addEventListener("click", identifyFocus);
});
